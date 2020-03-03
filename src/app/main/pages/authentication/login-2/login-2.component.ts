import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthentificationService } from 'app/main/pages/authentication/authentification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
    selector     : 'login-2',
    templateUrl  : './login-2.component.html',
    styleUrls    : ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class Login2Component implements OnInit
{
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private authService : AuthentificationService,
        private matSnackBar : MatSnackBar,
        private router : Router
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        if(localStorage.getItem('jwt')!=null && localStorage.getItem('refreshToken')!=null){
            this.router.navigate(['sample']);
        }
        this.loginForm = this._formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(){
        var loginCriteria = this.loginForm.value;
        loginCriteria.UserName = loginCriteria.email;
        loginCriteria.GrantType = 'password';
       this.authService.login(loginCriteria).subscribe(data=>{
           console.log(data);
           localStorage.setItem('login  Status', '1');
           localStorage.setItem('jwt', data.authToken.token);
           localStorage.setItem('username', data.authToken.username);
           localStorage.setItem('expiration', data.authToken.expiration);
           localStorage.setItem('userRole', data.authToken.roles);
           localStorage.setItem('refreshToken', data.authToken.refresh_token);
           this.router.navigate(['sample']);
       },
       error=>{
           console.log(error);
     
            this.matSnackBar.open('Password or username is wrong', 'OK', { // todo translate
                duration        : 2000
            });
           
     
       });
    }
}
