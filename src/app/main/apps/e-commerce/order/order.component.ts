import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Params } from '@angular/router';
import { ReferenceService } from 'app/Services/reference.service';
import { OrderService } from 'app/Services/order.service';


import { TranslateService } from '@ngx-translate/core';

@Component({
    selector     : 'e-commerce-order',
    templateUrl  : './order.component.html',
    styleUrls    : ['./order.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class EcommerceOrderComponent implements OnInit
{
    private order: any = {};
    private orderId : number = 0;
    private statusList : any[] = [];

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
        private translationService : TranslateService
    )
    {
 
    }

 
    ngOnInit(): void
    {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            this.orderId = params['Id'];
            console.log(this.orderId);
            this.initLoadData();
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
