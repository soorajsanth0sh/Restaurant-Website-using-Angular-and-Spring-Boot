const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = 8080;

// Middleware
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist')));

// Database setup
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to in-memory SQLite database');
    initializeDatabase();
  }
});

// Initialize database with tables and sample data
function initializeDatabase() {
  db.serialize(() => {
    // Create menu_items table
    db.run(`CREATE TABLE menu_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      image TEXT,
      category TEXT NOT NULL
    )`);

    // Insert sample menu items
    const menuItems = [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken in rich tomato-butter gravy',
        price: 16.99,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500',
        category: 'main'
      },
      {
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese with spices and vegetables',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500',
        category: 'appetizer'
      },
      {
        name: 'Gulab Jamun',
        description: 'Deep-fried milk solids soaked in rose syrup',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500',
        category: 'dessert'
      }
    ];

    const stmt = db.prepare('INSERT INTO menu_items (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)');
    menuItems.forEach(item => {
      stmt.run(item.name, item.description, item.price, item.image, item.category);
    });
    stmt.finalize();
  });
}

// API Routes
app.get('/api/menu-items/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.get('/api/menu-items', (req, res) => {
  db.all('SELECT * FROM menu_items', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/menu-items/category/:category', (req, res) => {
  const category = req.params.category;
  db.all('SELECT * FROM menu_items WHERE category = ?', [category], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/menu-items', (req, res) => {
  const { name, description, price, image, category } = req.body;
  const sql = 'INSERT INTO menu_items (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)';
  db.run(sql, [name, description, price, image, category], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Catch all other routes and return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});