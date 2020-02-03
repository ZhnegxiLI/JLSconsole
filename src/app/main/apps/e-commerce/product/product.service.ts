import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { appServiceBase } from 'app/app.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class EcommerceProductService extends appServiceBase implements Resolve<any> 
{
    routeParams: any;
    product: any;
    category: Array<any>;
    taxRateTable : Array<any>;
    onProductChanged: BehaviorSubject<any>;
    productHost : string = this.host + "api/Product/";

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        protected _httpClient: HttpClient,
        private _translateService: TranslateService,
    )
    {
        super(_httpClient);
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});

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
        console.log("resolve");

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProduct(),
                this.getCategory(),
                this.getTaxRate()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === null )
            {
                this.onProductChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get('api/e-commerce-products/' + this.routeParams.id)
                    .subscribe((response: any) => {
                        this.product = response;
                        this.onProductChanged.next(this.product);
                        resolve(response);
                    }, reject);
            }
        });
    }

    getCategory() : Promise<any>
    {
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.productHost + 'category?'+"lang="+lang)
                .subscribe((response: any) => {
                    this.category = response.data;
                    resolve(response);
                },reject);
        });
    }

    getTaxRate() : Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.productHost + 'taxRate')
                .subscribe((response : any) => {
                    this.taxRateTable = response.data;
                    resolve(response)
                })
        })
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any>
    {
        console.log(product);
        return new Promise((resolve, reject) => {
            this.postUrl(this.productHost + 'save', product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/', product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
