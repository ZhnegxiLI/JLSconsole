import { NgModule } from '@angular/core';


import { Login2Module } from 'app/main/pages/authentication/login-2/login-2.module';
import { RouterModule } from '@angular/router';
import { AuthentificationService } from 'app/Services/authentification.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Login2Component } from './authentication/login-2/login-2.component';

const routes = [
    {
        path     : '**',
        component: Login2Component
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        // Authentication
        Login2Module,
        MatSnackBarModule
    ],
    providers:[
        AuthentificationService
    ]
})
export class PagesModule
{

}
