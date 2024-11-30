package com.gourmethaven.config;

import com.gourmethaven.model.MenuItem;
import com.gourmethaven.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private MenuItemRepository menuItemRepository;

    @Override
    public void run(String... args) {
        if (menuItemRepository.count() == 0) {
            MenuItem item1 = new MenuItem();
            item1.setName("Butter Chicken");
            item1.setDescription("Tender chicken in rich tomato-butter gravy");
            item1.setPrice(16.99);
            item1.setImage("https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500");
            item1.setCategory("main");
            menuItemRepository.save(item1);

            MenuItem item2 = new MenuItem();
            item2.setName("Paneer Tikka");
            item2.setDescription("Grilled cottage cheese with spices and vegetables");
            item2.setPrice(14.99);
            item2.setImage("https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500");
            item2.setCategory("appetizer");
            menuItemRepository.save(item2);

            MenuItem item3 = new MenuItem();
            item3.setName("Gulab Jamun");
            item3.setDescription("Deep-fried milk solids soaked in rose syrup");
            item3.setPrice(5.99);
            item3.setImage("https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500");
            item3.setCategory("dessert");
            menuItemRepository.save(item3);
        }
    }
}