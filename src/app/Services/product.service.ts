import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class ProductService extends appServiceBase 
{
 
    public apiUrlAdvancedProductSearchByCriteria: string = this.host + "admin/Product/AdvancedProductSearchByCriteria";
    
    public apiUrlGetProductById: string = this.host + "admin/Product/GetProductById";

    public apiUrlUpdateOrCreateProduct: string = this.host + "admin/Product/UpdateOrCreateProduct";

    public apiUrlUploadPhoto: string = this.host + "admin/Product/UploadPhoto";

    public apiUrlGetProductPhotoPathById: string = this.host + "admin/Product/GetProductPhotoPathById";
    
    public apiUrlGetProductInfoByReferenceIds: string = this.host + "admin/Product/GetProductInfoByReferenceIds"

    public apiUrlRemoveImageById: string = this.host + "admin/Product/RemoveImageById"

    public apiUrlRemoveProductCommentById: string = this.host + "admin/Product/RemoveProductCommentById";

    public apiUrlGetProductCommentListByCriteria: string = this.host + "api/Product/GetProductCommentListByCriteria";

    constructor(
        protected _httpClient: HttpClient,
        protected _matSnackBar: MatSnackBar,
        protected _router : Router
    )
    {
        super(_httpClient,_matSnackBar,_router);
    }

    GetProductCommentListByCriteria(criteria: any): Observable<any>
    {
        return super.getUrl(this.apiUrlGetProductCommentListByCriteria,criteria);
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

    GetProductInfoByReferenceIds(criteria : any) : Observable<any>
    {
        return super.postUrl(this.apiUrlGetProductInfoByReferenceIds,criteria);
    }

    RemoveImageById(criteria :any ): Observable<any>
    {
        return super.postUrl(this.apiUrlRemoveImageById,criteria);
    }

    RemoveProductCommentById(criteria: any): Observable<any>
    {
        return super.getUrl(this.apiUrlRemoveProductCommentById,criteria);
    }

    
}
