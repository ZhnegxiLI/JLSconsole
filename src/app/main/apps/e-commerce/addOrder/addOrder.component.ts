import { ProductSearchDialog } from './product-search/product-search.component';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';

import { orderStatuses } from 'app/main/apps/e-commerce/order/order-statuses';
import { Order } from 'app/main/apps/e-commerce/order/order.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector     : 'e-commerce-addOrder',
    templateUrl  : './addOrder.component.html',
    styleUrls    : ['./addOrder.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceAddOrderComponent implements OnInit
{
    order: Order;
    orderStatuses: any;
    orderForm:FormGroup;
    dialogRef: any;

    clickInput = {
        paymentInfo : false,
        status : false,
        clientRemark : false,
        adminRemark : false
    }

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {EcommerceOrderService} _ecommerceOrderService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        public _matDialog: MatDialog,
    )
    {
 
        // Set the defaults
        this.order = new Order();
        this.orderStatuses = orderStatuses;

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        
        this._fuseTranslationLoaderService.loadTranslations(english, chinese);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {


    }

    changeProductQuantity(product){
        console.log(product);
    }

    newProduct(): void
    {
     
    
    }

 

 

}
