import { NgModule } from '@angular/core';
import { ConfimDialog } from './confim-dialog/confim-dialog.component';
import {MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatError, MatDatepickerModule} from "@angular/material";
import { AddressDialog } from './address-dialog/address-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerInfoDialogComponent } from './customer-info-dialog/customer-info-dialog.component';
import { ShipmentInfoDialogComponent } from './shipment-info-dialog/shipment-info-dialog.component';
import { ModifyProductPriceDialogComponent } from './modify-product-price-dialog/modify-product-price-dialog.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
    declarations: [
        ConfimDialog,
        AddressDialog,
        CustomerInfoDialogComponent,
        ShipmentInfoDialogComponent,
        ModifyProductPriceDialogComponent
    ],
    imports     : [
        MatDatepickerModule,
        MatDialogModule,
        MatButtonModule,
        TranslateModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports : [ConfimDialog,AddressDialog,CustomerInfoDialogComponent,ShipmentInfoDialogComponent,ModifyProductPriceDialogComponent],
    entryComponents: [ConfimDialog,AddressDialog,CustomerInfoDialogComponent,ShipmentInfoDialogComponent,ModifyProductPriceDialogComponent],
})

export class DialogModule{}