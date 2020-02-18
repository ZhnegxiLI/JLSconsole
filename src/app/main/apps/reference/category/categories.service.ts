import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class ReferenceCategoryService extends appServiceBase implements Resolve<any>
{
    category: any[];
    onCategoryChanged: BehaviorSubject<any>;
    referenceHost : string = this.host + "api/reference/";

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

        this.onCategoryChanged = new BehaviorSubject({});
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
                this.getCategory()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get category
     *
     * @returns {Promise<any>}
     */
    getCategory() : Promise<any>{
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.referenceHost + "getCategory")
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.category = response.data;
                    this.onCategoryChanged.next(this.category);
                    resolve(response);
                }, reject);
        });
    }

    updateCategory(category) : Promise<any>{
        return new Promise((resolve, reject) => {
            this.postUrl(this.referenceHost + 'updateCategory', category)
                .subscribe((response: any) => {
                    this.getCategory();
                    resolve(response);
                }, reject);
        })
    }
}
