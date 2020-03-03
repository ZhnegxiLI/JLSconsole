import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class EcommerceProductsService extends appServiceBase 
{
 
    productHost : string = this.host + "api/Product/";

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


 
    getProductList( criteria : any): Observable<any>
    { //intervalCount : number, size : number, orderActive : string, orderDirection : string, filter : string

        return super.getUrl(this.productHost + "GetAllProducts",criteria);
    }


}
