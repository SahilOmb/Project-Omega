import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Welcome } from './welcome/welcome';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path:"register",component:Register},
    {path:"login",component:Login},
    {path:"",component:Welcome},
    {path:"dashboard", component:Dashboard}
];
