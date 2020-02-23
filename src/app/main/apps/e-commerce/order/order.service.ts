import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { appServiceBase } from 'app/app.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class EcommerceOrderService extends appServiceBase implements Resolve<any>
{
    routeParams: any;
    order: any;
    searchProductData : any;
    onOrderChanged: BehaviorSubject<any>;
    onSearchProductChanged: BehaviorSubject<any>;
    onSearchProductCountChanged : BehaviorSubject<any>;
    orderHost = this.host + "api/Order/";
    productHost = this.host + "api/Product/"

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        protected _httpClient: HttpClient,
        protected _matSnackBar: MatSnackBar,
        protected _router : Router,
        private _translateService: TranslateService,
    )
    {
        super(_httpClient,_matSnackBar,_router);
        // Set the defaults
        this.onOrderChanged = new BehaviorSubject({});
        this.onSearchProductChanged = new BehaviorSubject({});
        this.onSearchProductCountChanged = new BehaviorSubject({});
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
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getOrder()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get order
     *
     * @returns {Promise<any>}
     */
    getOrder(): Promise<any>
    {
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.orderHost + "GetOrderById?" + this.routeParams.id + "&lang=" + lang)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.order = response.data;
                    this.onOrderChanged.next(this.order);
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Save order
     *
     * @param order
     * @returns {Promise<any>}
     */
    saveOrder(order): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-orders/' + order.id, order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add order
     *
     * @param order
     * @returns {Promise<any>}
     */
    addOrder(order): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-orders/', order)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    searchProduct(intervalCount : number, size : number, orderActive : string, orderDirection : string, filter : string) : Promise<any>{
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.productHost + "GetAllProducts?lang=" + lang
                +"&intervalCount="+ intervalCount 
                +"&size="+size 
                + "&orderActive=" + orderActive 
                + "&orderDirection=" + orderDirection
                + "&filter=" + filter)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                this.searchProductData = response.data.content;
                this.onSearchProductChanged.next(response.data.content);
                this.onSearchProductCountChanged.next(response.data.count);
                resolve(response.data);
            }, reject);
        });
    }
}
