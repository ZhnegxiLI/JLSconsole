import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class EcommerceProductsService extends appServiceBase implements Resolve<any>
{
    products: any[];
    onProductsChanged: BehaviorSubject<any>;
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
        // Set the defaults
        this.onProductsChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProducts(0,10,null,null)
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(intervalCount : number, size : number, orderActive : string, orderDirection : string): Promise<any>
    {
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.productHost + "GetAllProducts?lang="+lang 
                +"&intervalCount=" + intervalCount 
                +"&size="+size 
                + "&orderActive=" + orderActive 
                + "&orderDirection=" + orderDirection)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.products = response.data;
                    this.onProductsChanged.next(this.products);
                    resolve(response);
                }, reject);
        });
    }


}
