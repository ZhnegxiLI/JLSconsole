import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { ReferenceService } from 'app/Services/reference.service';
import { OrderService } from 'app/Services/order.service';

import { environment } from '../../../../../environments/environment';

import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { AddressDialog } from 'app/dialog/address-dialog/address-dialog.component';

import { CustomerInfoDialogComponent } from 'app/dialog/customer-info-dialog/customer-info-dialog.component';

import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
    selector: 'e-commerce-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EcommerceOrderComponent implements OnInit {

    private environment = environment;
    private order: any = {};
    private orderId: number = 0;
    private statusList: any[] = [];
    private statusId: number = 0;

    public view: string = "order";

    orderStatuses: any;
    statusForm: FormGroup;

    private orderType: string = 'OrderType_Internal'; // OrderType_Internal / OrderType_External

    private urlReturnView: string = '';
    private title: string = '';
    private Loading: boolean = false;

    // todo: place into the configuration file
    private orderStatusClass: any[] = [
        { Code: 'OrderStatus_Valid', Class: 'green-500' },
        { Code: 'OrderStatus_Refus', Class: 'red-500' },
        { Code: 'OrderStatus_Progressing', Class: 'orange-500' },
    ]

    constructor(
        private _formBuilder: FormBuilder,
        private activeRoute: ActivatedRoute,
        private referenceService: ReferenceService,
        private orderService: OrderService,
        private translationService: TranslateService,
        private dialog: MatDialog,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _fuseProgressBarService: FuseProgressBarService,
        private _matSnackBar: MatSnackBar,
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, chinese, french);
    }


    ngOnInit(): void {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            var previousPage = params['View'];

            if (previousPage != null && previousPage == 'orders') {
                this.urlReturnView = '/apps/e-commerce/orders';
                // Orders page come into
                this.orderId = params['Id'] != null && params['Id'] != 0 ? params['Id'] : 0;
                console.log(this.orderId);
                if (this.orderId != 0) {
                    this.initLoadData();
                }
                else {
                    if (localStorage.getItem('cart') != null) {
                        this.order.ProductList = JSON.parse(localStorage.getItem('cart'));
                    }
                }
            }
            else {
                this.urlReturnView = '/apps/e-commerce/cart';
                this.title = 'New order'; // todo translation

                if (this.orderId == 0 && localStorage.getItem('cart') != null) {
                    this.order.ProductList = JSON.parse(localStorage.getItem('cart'));
                }
            }

            // get status label
            this.referenceService.getReferenceItemsByCategoryLabels({
                Lang: this.translationService.currentLang,
                ShortLabels: ['OrderStatus']
            }).subscribe(result => {
                if (result != null) {
                    console.log(result);
                    this.statusList = result;

                    if (this.orderId == 0) {
                        this.statusList = this.statusList.filter(p => p.Code == 'OrderStatus_Progressing');
                        if (this.statusList != null && this.statusList.length > 0) {
                            this.statusId = this.statusList[0].Id;
                        }
                    }
                }
            },
                error => {
                    //todo 
                });

        });
    }

    ModifyCustomerInfo() {
        console.log(this.order.CustomerInfo);

        const dialogRef = this.dialog.open(CustomerInfoDialogComponent, { // todo change
            data: {
                CustomerInfo: this.order.CustomerInfo
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result != null) {
                this.order.CustomerInfo = result;
            }
        });

    }

    saveOrder() {
        var OrderCriteria = {
            ShippingAddress: this.order.ShippingAdress,
            FacturationAddress: this.order.FacturationAdress,
            OrderId: this.orderId,
            CreatedOrUpdatedBy: localStorage.getItem('userId'),
            StatusReferenceId: this.statusId,
            References: this.order.ProductList
        }

        this._fuseProgressBarService.show();

        this.orderService.saveAdminOrder(OrderCriteria).subscribe(result => {
            if (result > 0) {

                this._fuseProgressBarService.hide();

                this._matSnackBar.open('Save successfully', 'OK', { // todo translate
                    duration: 2000
                });

                this.orderId = result;
                localStorage.removeItem('cart'); // remove cart after the order is created
                this.initLoadData();
            }
            else {
                this._matSnackBar.open('Error please try again', 'OK', { // todo translate
                    duration: 2000
                });
            }
        },
            error => {
                this._matSnackBar.open('Error please try again', 'OK', { // todo translate
                    duration: 2000
                });
            })
    }

    matchStatusClass(Code) {
        if (this.orderStatusClass != null && Code != null) {
            var temp = this.orderStatusClass.find(p => p.Code == Code);
            if (temp != null) {
                return temp.Class;
            }
        }
        return '';
    }


    checkSaveButtonAvailable() {
        if (this.statusId != null && this.statusId != 0 && this.order.ShippingAdress != null && this.order.FacturationAdress != null) {
            return false;
        }
        return true;
    }

    initLoadData(): void {
        var criteria = {
            OrderId: this.orderId,
            Lang: this.translationService.currentLang
        }
        this.Loading = true;
        this.orderService.getOrdersListByOrderId(criteria).subscribe(result => {
            if (result != null && result.Data != null) {
                this.order = result.Data;

                this.orderId = result.Data.OrderInfo.Id;
                this.statusId = result.Data.Status.Id;

                if (result.Data.OrderType != null) {
                    this.orderType = result.Data.OrderType.Code;
                }

                this.title = 'Order info' + this.orderId; // todo translation
                console.log(this.order);
            }
            this.Loading = false;
        },
            error => {
                this.Loading = false;
                //todo
            });

    }

    modifyAddress(addressType) {
        console.log(addressType);
        var addressData = null;
        if (addressType == 'InvoiceAddress') {
            addressData = this.getEmptyAddressInfo();
        }
        else if (addressType == 'ShippingAddress') {
            addressData = this.getEmptyAddressInfo();
        }
        const dialogRef = this.dialog.open(AddressDialog, {
            data: {
                Type: addressType,
                Address: addressData
            } // todo translate
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result != null) {
                if (result.Type != null) {
                    if (result.Type == 'ShippingAddress') {
                        this.order.ShippingAdress = result.Address;
                    }
                    else if (result.Type = 'InvoiceAddress') {
                        this.order.FacturationAdress = result.Address;
                    }
                }
            }
        });
    }

    getEmptyAddressInfo() {
        return {
            Id: 0,
            ContactFax: null,
            ContactLastName: null,
            ContactFirstName: null,
            ZipCode: null,
            FirstLineAddress: null,
            SecondLineAddress: null,
            City: null,
            Country: null,
            EntrepriseName: null,
            ContactTelephone: null,
            Provence: null,
            IsDefaultAdress: null,
            CreatedOn: null,
            CreatedBy: null,
            UpdatedOn: null,
            UpdatedBy: null
        }
    }


}
