import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { appServiceBase } from 'app/app.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Injectable()
export class EcommerceProductService extends appServiceBase 
{
    private productHost : string = this.host + "api/Product/";

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

  
    getProduct(criteira:any): Observable<any>
    {
       return super.getUrl(this.productHost+'GetProductById',criteira);
    }

    getCategory() : Observable<any>
    {
        var lang = this._translateService.currentLang;

        return super.getUrl(this.productHost+'GetProductCategory',
        { lang: lang});

    }

    getTaxRate() : Observable<any> // todo passe to the referenceservices
    {
        return super.getUrl(this.productHost+'GetTaxRate',null); 
    }

    // removeImage(id : number): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this.postUrl(this.productHost + 'RemoveImageById', id)
    //             .subscribe((response : any) => {
    //                 if(!this.checkResult(response)){
    //                     return;
    //                 }
    //                 resolve(response)
    //             })
    //     })
    // }

    // /**
    //  * Save product
    //  *
    //  * @param product
    //  * @returns {Promise<any>}
    //  */
    // saveProduct(product): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this.postUrl(this.productHost + 'SaveProduct', product)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }

  

    // /**
    //  * Add product
    //  *
    //  * @param product
    //  * @returns {Promise<any>}
    //  */
    // addProduct(product): Promise<any>
    // {
    //     return new Promise((resolve, reject) => {
    //         this._httpClient.post('api/e-commerce-products/', product)
    //             .subscribe((response: any) => {
    //                 resolve(response);
    //             }, reject);
    //     });
    // }
}
