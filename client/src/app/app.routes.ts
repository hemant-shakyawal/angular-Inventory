import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

    {
        path:'',
        loadComponent:()=> import('./components/login/login.component').then((c)=>LoginComponent)
    },    
    {
        path:'',
        component:HomeComponent,
        children:[ {
            path:'dashboard',
            loadComponent:()=> import('./components/dashboard/dashboard.component').then((c)=>DashboardComponent)
        }]
       
    }
];
