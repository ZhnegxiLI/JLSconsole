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
 
    private productHost : string = this.host + "api/Product/";
    
    private apiUrlGetReferenceItemsByCategoryLabels: string = this.host + "api/Reference/GetReferenceItemsByCategoryLabels";

    private apiUrlAdvancedProductSearchByCriteria: string = this.host + "api/Product/AdvancedProductSearchByCriteria";
    
    private apiUrlGetProductById: string = this.host + "api/Product/GetProductById";

    private apiUrlUpdateOrCreateProduct: string = this.host + "api/Product/UpdateOrCreateProduct";

    private apiUrlUploadPhoto: string = this.host + "api/Product/UploadPhoto";

    private apiUrlGetProductPhotoPathById: string = this.host + "api/Product/GetProductPhotoPathById";
    

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        protected _httpClient: HttpClient,
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

    /* todo change to ri service */
    getReferenceItemsByCategoryLabels(criteria : any): Observable<any>
    {
        return super.postUrl(this.apiUrlGetReferenceItemsByCategoryLabels,criteria);
    } 

    AdvancedProductSearchByCriteria(criteria : any) : Observable<any>
    {
        return super.postUrl(this.apiUrlAdvancedProductSearchByCriteria,criteria);
    } 

    GetProductById(ProductId : number) : Observable<any>
    {
        return super.getUrl(this.apiUrlGetProductById, { Id : ProductId});
    }

    UpdateOrCreateProduct(criteria : any) : Observable<any>
    {
        return super.postUrl(this.apiUrlUpdateOrCreateProduct,criteria);
    }

    UploadPhoto(criteria : any, options : any) : Observable<any>
    {
        return super.postFileUrl(this.apiUrlUploadPhoto,criteria, options);
    }

    GetProductPhotoPathById(criteria : any) : Observable<any>
    {
        return super.getUrl(this.apiUrlGetProductPhotoPathById,criteria);
    }
    
}
