import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  Observable } from 'rxjs';

import { appServiceBase } from 'app/app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class OrderService extends appServiceBase 
{
    public apiUrlAdvancedOrderSearchByCriteria = this.host +"admin/Order/AdvancedOrderSearchByCriteria";
    public apiUrlGetOrdersListByOrderId = this.host +"api/Order/GetOrdersListByOrderId";
    public apiUrlSaveAdminOrder = this.host +"admin/Order/SaveAdminOrder";

    constructor(
        protected _httpClient: HttpClient,
        protected _matSnackBar: MatSnackBar,
        protected _router : Router
    )
    {
        super(_httpClient,_matSnackBar,_router);
    }


    advancedOrderSearchByCriteria(criteria): Observable<any>
    {
        return  super.postUrl(this.apiUrlAdvancedOrderSearchByCriteria, criteria );
    }

    getOrdersListByOrderId(criteria) : Observable<any>
    {
        return super.getUrl(this.apiUrlGetOrdersListByOrderId,criteria);
    }


    saveAdminOrder(criteria): Observable<any>
    {
        return  super.postUrl(this.apiUrlSaveAdminOrder, criteria );
    }

}
