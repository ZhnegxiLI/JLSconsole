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
import { EcommerceOrderService } from 'app/main/apps/e-commerce/order/order.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector     : 'e-commerce-order',
    templateUrl  : './order.component.html',
    styleUrls    : ['./order.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceOrderComponent implements OnInit, OnDestroy
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
        private _ecommerceOrderService: EcommerceOrderService,
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
        // Subscribe to update order on changes
        this._ecommerceOrderService.onOrderChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(order => {
                this.order = new Order(order);
            });

        this.orderForm = this.createOrderForm();
    }

    changeProductQuantity(product){
        console.log(product);
    }

    newProduct(): void
    {
        if(!this._ecommerceOrderService.checkNetWork){
            return;
        }

        this._ecommerceOrderService.searchProduct(0,10,null,null,"").then(
            (reponse) => {
                this.dialogRef = this._matDialog.open(ProductSearchDialog, {
                    panelClass: 'product-search-dialog',
                    data      : {
                        data : reponse
                    },
                    width : "60vw"
                });
        
                this.dialogRef.afterClosed()
                    .subscribe((response: any) => {
                        if ( !response )
                        {
                            return;
                        }
        
                    });
            }
        );
    }

    createOrderForm(): FormGroup
    {
        return this._formBuilder.group({
            paymentInfo : [this.order.paymentInfo],
            status : [this.order.statusLabel],
            genterShippingAdress : [this.order.shippingAdresse.genter],
            firstNameShippingAdresse : [this.order.shippingAdresse.contactFirstName],
            lastNameShippingAdresse : [this.order.shippingAdresse.contactLastName],
            phoneShippingAdresse : [this.order.shippingAdresse.contactTelephone],
            faxShippingAdresse : [this.order.shippingAdresse.contactFax],
            streeShippingAdresse : [this.order.shippingAdresse.streeName],
            detailShippingAdresse : [this.order.shippingAdresse.adressDetail],
            postCodeShippingAdresse : [this.order.shippingAdresse.postCode],
            cityShippingAdresse : [this.order.shippingAdresse.city],
            provenceShippingAdresse : [this.order.shippingAdresse.provence],
            countryShippingAdresse : [this.order.shippingAdresse.country],
            genterFacturationAdress : [this.order.facturationAdress.genter],
            firstNameFacturationAdresse : [this.order.facturationAdress.contactFirstName],
            lastNameFacturationAdresse : [this.order.facturationAdress.contactLastName],
            phoneFacturationAdresse : [this.order.facturationAdress.contactTelephone],
            faxFacturationAdresse : [this.order.facturationAdress.contactFax],
            streeFacturationAdresse : [this.order.facturationAdress.streeName],
            detailFacturationAdresse : [this.order.facturationAdress.adressDetail],
            postCodeFacturationAdresse : [this.order.facturationAdress.postCode],
            cityFacturationAdresse : [this.order.facturationAdress.city],
            provenceFacturationAdresse : [this.order.facturationAdress.provence],
            countryFacturationAdresse : [this.order.facturationAdress.country],
            clientRemark : [this.order.clienRemark],
            adminRemark : [this.order.adminRemark]
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
