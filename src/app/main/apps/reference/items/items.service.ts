import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class ReferenceItemsService extends appServiceBase implements Resolve<any>
{
    items: any[];
    onItemsChanged : BehaviorSubject<any>;
    onCategoryChanged : BehaviorSubject<any>;
    onItemsCountChanged : BehaviorSubject<any>;
    referenceHost : string = this.host + "api/reference/";
    category: any[];
    itemsCount : number;

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

        this.onItemsChanged = new BehaviorSubject({});
        this.onCategoryChanged =  new BehaviorSubject({});
        this.onItemsCountChanged = new BehaviorSubject({});
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
                this.getItems(0, 10, null, null),
                this.getValidityCategory(),
                this.getReferenceItemCount()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get items
     *
     * @returns {Promise<any>}
     */
    getItems(intervalCount : number, size : number, orderActive : string, orderDirection : string) : Promise<any>{
        var lang = this._translateService.currentLang;
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.referenceHost + "GetAllReferenceItems?intervalCount=" 
                + intervalCount 
                +"&size="+size 
                + "&orderActive=" + orderActive 
                + "&orderDirection=" + orderDirection)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.items = response.data.map(item => {
                        var labelCurrent = item.labels.filter(label => label.lang == lang)[0];
                        if(labelCurrent != null){
                            item.label = labelCurrent.label;
                        }
                        return item;
                    } );
                    this.onItemsChanged.next(response.data);
                    resolve(response);
                }, reject);
        });
    }

    getValidityCategory() : Promise<any>{
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.referenceHost + "GetAllValidityReferenceCategory")
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.category = response.data;
                    this.onCategoryChanged.next(response.data);
                    resolve(response);
                }, reject);
        });
    }

    updateItem(item) : Promise<any>{
        return new Promise((resolve, reject) => {
            this.postUrl(this.referenceHost + 'CreatorUpdateReferenceItem', item)
                .subscribe((response: any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.getItems(0,10,null,null);
                    resolve(response);
                }, reject);
        })
    }

    getReferenceItemCount() : Promise<any>{
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.referenceHost + 'GetReferenceItemsCount')
                .subscribe((response : any) => {
                    if(!this.checkResult(response)){
                        return;
                    }
                    this.itemsCount = response.data;
                    this.onItemsCountChanged.next(this.itemsCount);
                    resolve(response.data);
                })
        })
    }

}
