import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header style="background: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 100;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem;">
        <h1 style="font-size: 1.5rem; color: #e31837;">Gourmet Haven</h1>
        <nav>
          <a routerLink="/" style="margin: 0 1rem; text-decoration: none; color: #333;">Home</a>
          <a routerLink="/menu" style="margin: 0 1rem; text-decoration: none; color: #333;">Menu</a>
          <a routerLink="/contact" style="margin: 0 1rem; text-decoration: none; color: #333;">Contact</a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {}