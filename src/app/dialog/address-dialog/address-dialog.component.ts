import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address-dialog',
  templateUrl: 'address-dialog.component.html',
  styleUrls    : ['address-dialog.component.scss']
})
export class AddressDialog implements OnInit {

  private   adreeForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddressDialog>,
    private formBuilder:FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.adreeForm = this.formBuilder.group({
        Id:['0'],
        EntrepriseName: ['Google', Validators.required],
        ContactFirstName: ['',Validators.required],
        ContactLastName: ['',Validators.required],
        FirstLineAddress:['',Validators.required],
        SecondLineAddress:[''],
        City:['',Validators.required],
        Country:['',Validators.required],
        ZipCode: ['',Validators.required],
        ContactTelephone:['',Validators.required],
        ContactFax:['']
      });
    }
  ngOnInit() {
  }

  checkSaveButton(){

  }

}
