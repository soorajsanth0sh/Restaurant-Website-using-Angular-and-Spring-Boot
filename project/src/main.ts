import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HomeComponent } from './app/components/home/home.component';
import { MenuComponent } from './app/components/menu/menu.component';
import { ContactComponent } from './app/components/contact/contact.component';
import { CartComponent } from './app/components/cart/cart.component';
import { ADMIN_ROUTES } from './app/components/admin/admin.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class App {
  name = 'Gourmet Haven';
}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { 
    path: 'admin', 
    children: ADMIN_ROUTES
  },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient()
  ]
}).catch(err => console.error(err));