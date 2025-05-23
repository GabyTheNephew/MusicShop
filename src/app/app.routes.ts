import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home-page', pathMatch: 'full' },
    { path: 'home-page', loadComponent: () => import('./components/home-page/home-page.component').then((component) => component.HomePageComponent) }
];
