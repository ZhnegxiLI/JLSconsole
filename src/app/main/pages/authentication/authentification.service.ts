import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class AuthentificationService extends appServiceBase 
{

    authHost : string =  "http://localhost/JLSMobileApplication/api/Token/"; // todo change

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        protected _httpClient: HttpClient,
        private _translateService: TranslateService,
        protected _matSnackBar: MatSnackBar,
        protected _router : Router
    )
    {
        super(_httpClient,_matSnackBar,_router);
    }


    login(criteria): Observable<any>
    {
       return super.postUrl(this.authHost + 'Auth', criteria);
     
    }
}
