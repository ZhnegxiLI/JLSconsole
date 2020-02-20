import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class EcommerceOrdersService extends appServiceBase implements Resolve<any>
{
    orders: any[];
    onOrdersChanged: BehaviorSubject<any>;
    orderHost : string = this.host + "api/Order/";

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

        this.onOrdersChanged = new BehaviorSubject({});
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
                this.getOrders()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get orders
     *
     * @returns {Promise<any>}
     */
    getOrders(): Promise<any>
    {
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.orderHost + 'getAll?lang='+lang)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.orders = response;
                    this.onOrdersChanged.next(this.orders);
                    resolve(response);
                }, reject);
        });
    }
}
