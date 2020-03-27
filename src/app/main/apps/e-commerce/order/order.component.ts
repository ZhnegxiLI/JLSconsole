import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { ReferenceService } from 'app/Services/reference.service';
import { OrderService } from 'app/Services/order.service';

import { environment } from '../../../../../environments/environment';

import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { AddressDialog } from 'app/dialog/address-dialog/address-dialog.component';
import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

@Component({
    selector     : 'e-commerce-order',
    templateUrl  : './order.component.html',
    styleUrls    : ['./order.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceOrderComponent implements OnInit
{

    private environment = environment;
    private order: any = {};
    private orderId : number = 0;
    private statusList : any[] = [];

    public view: string = "order";

    orderStatuses: any;
    statusForm: FormGroup;
    


    /**
     * Constructor
     *
     * @param {EcommerceOrderService} _ecommerceOrderService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private activeRoute : ActivatedRoute,
        private referenceService : ReferenceService,
        private orderService : OrderService,
        private translationService : TranslateService,
        private dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    )
    {
        this._fuseTranslationLoaderService.loadTranslations(english,chinese,french);
    }

 
    ngOnInit(): void
    {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.orderId = params['Id']!=null&& params['Id']!=0 ? params['Id'] : 0 ;
            console.log(this.orderId);
            if(this.orderId!=0){
                this.initLoadData();
            }
            else{
                if (localStorage.getItem('cart')!=null){
                    this.order.ProductList = JSON.parse(localStorage.getItem('cart'));
                }

                this.order.ShippingAdress = this.getEmptyAddressInfo();

                this.order.FacturationAdress = this.getEmptyAddressInfo();
            }
        });
    }

    initLoadData() : void
    {
        var criteria = {
            OrderId : this.orderId,
            Lang : this.translationService.currentLang
        }
        this.orderService.getOrdersListByOrderId(criteria).subscribe(result =>{
            if(result!=null && result.Data!=null){
                this.order = result.Data;
                console.log(this.order);
            }
        },
        error=>{
            //todo
        });


        this.referenceService.getReferenceItemsByCategoryLabels({
            Lang: this.translationService.currentLang,
            ShortLabels:['OrderStatus']
        }).subscribe(result=>{
            if(result!=null){
                console.log(result);
                this.statusList = result;
            }
        },
        error=>{
            //todo 
        });
    }

    modifyAddress(addressType){
        console.log(addressType);
        var addressData = null;
        if(addressType == 'InvoiceAddress'){
            addressData = this.order.ShippingAdress;
        }
        else if(addressType == 'ShippingAddress'){
            addressData = this.order.FacturationAdress;
        }
        const dialogRef = this.dialog.open(AddressDialog, {
            data: {
                Type : addressType,
                Address: addressData
            } // todo translate
          });
      
          dialogRef.afterClosed().subscribe(result => {
        
          });
    }

    getEmptyAddressInfo(){
        return {
            Id : 0,
            ContactFax : null,
            ContactLastName : null,
            ContactFirstName : null,
            ZipCode : null,
            FirstLineAddress : null,
            SecondLineAddress : null,
            City: null,
            Provence : null,
            Country : null,
            EntrepriseName : null
        }
    }

    /**
     * Update status
     */
    updateStatus(): void
    {
        const newStatusId = Number.parseInt(this.statusForm.get('newStatus').value);

        if ( !newStatusId )
        {
            return;
        }

        const newStatus = this.orderStatuses.find((status) => {
            return status.id === newStatusId;
        });

        newStatus['date'] = new Date().toString();

        this.order.status.unshift(newStatus);
    }
}
