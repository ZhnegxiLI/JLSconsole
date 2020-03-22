import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Inject } from '@angular/core';
import { locale as english } from './i18n/en';
import { locale as chinese } from './i18n/cn';
import { locale as french } from './i18n/fr';
import { environment } from '../../../../../environments/environment';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatPaginator, MatSort, MatDialogRef, MatSnackBar } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/Services/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { AddressDialog } from './../../../../dialog/address-dialog/address-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations   : fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {

  displayedColumns = ['username', 'entrepriseName', 'userType', 'telephone', 'active'];
  //imageRoot = this._ecommerceProductsService.host + "images/";


  private environment = environment;
  public view: string = "users";
  private userRoleList :any[] = [];
  private totalCount : number = 0;
  private userList : any[] = [];

  private searchCriteria = {
      UserType: null,
      Validity: true,
      Username : '',
      begin : 0,
      step : 10,
      Lang :''
  };

  private statusList : any[] = [{
    Value : true,
    Label : 'Valide'
  },{
      Value : false,
      Label :'Invalide'
  }];

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild('filter', {static: true})
  filter: ElementRef;

  
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private userService : UserService,
    public dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
  ) {
      this._fuseTranslationLoaderService.loadTranslations(english, chinese,french);
   }

  ngOnInit() {

    // load user role list 
    this.userService.getUserRoleList().subscribe(result=>{
      if(result!=null && result.length>0){
          this.userRoleList = result;
      }
      },
      error=>{
          // todo 
      });
  }

  getSecondCategoryList (){

  }

  search(){
    console.log(this.searchCriteria);
    this._fuseProgressBarService.show();
    this.userService.advancedUserSearch(this.searchCriteria).subscribe(result=>{
      if(result!=null   ){
        this.userList = result.UserList;
        this.totalCount = result.TotalCount;
        console.log(this.userList)
    }
    this._fuseProgressBarService.hide();
    },
    error=>{
      this._fuseProgressBarService.hide();
    });
  }

  getServerData(event){
    this.searchCriteria.begin = event.pageIndex;
    this.searchCriteria.step = event.pageSize;
    this.search();
  }

  sortData(event){
    //todo
    console.log(event);
  }

  insertOrUpdateUser(userId){
    console.log(userId);

    var filterUserRoleList = this.userRoleList.filter(p=>p.Name != 'SuperAdmin');
    const dialogRef = this.dialog.open(UserDialog, {
        width: '600px',
        data: {userRoleList: filterUserRoleList, statusList: this.statusList, userId : userId}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result!=null && result.IsSaved!=null&& result.IsSaved == true){
        this.search();
      }
    });

  }
}


@Component({
  selector: 'user-dialog',
  templateUrl: 'user-dialog.html',
})
export class UserDialog {
  private userForm: FormGroup;
  private modifyPassword : boolean = false;
  private password : string;
  private confirmPassword: string;
  private modifyPasswordDisabled : boolean = false;

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    public dialog: MatDialog,
    private formBuilder:FormBuilder,
    private userService : UserService,
    private _matSnackBar: MatSnackBar,
    private _fuseProgressBarService: FuseProgressBarService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.userForm = this.formBuilder.group({
        Email : ['',Validators.compose([Validators.required,Validators.email])],
        RoleId : ['',Validators.required],
        Validity : ['']
      });

  }

  ngOnInit() {
    if(this.data.userId !=0){
      this.userService.GetUserById({UserId : this.data.userId}).subscribe(result=>{
        console.log(result);
        if(result!=null){
          this.userForm.controls['Email'].setValue(result.Email);
          this.userForm.controls['Email'].disable();
          this.userForm.controls['RoleId'].setValue(result.RoleId);
          this.userForm.controls['Validity'].setValue(result.Validity);
        }
      });
    }
    else{
      this.modifyPassword = true;
      this.modifyPasswordDisabled = true;
    }
  }

  onNoClick(): void {
    this.dialogRef.close({IsSaved: false});
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  // let pass = group.get('Password').value;
  // let confirmPass = group.get('ConfirmPassword').value;

  // return pass === confirmPass ? null : {notTheSame : true};     
  }

  checkSaveButton(){
    if(this.userForm.status=="VALID" && (this.modifyPassword==false || (this.modifyPassword==true && !this.checkPasswordLength() && !this.checkPasswordSame()))){
      return false;
    }
    else{
      return true;
    }
  }

  checkPasswordLength(){
    return  this.password==null || this.password.length<8;
  }

  
  checkPasswordSame(){
    return this.password==null  || this.confirmPassword==null  || !(this.confirmPassword === this.password);
  }

  save(){
    var criteria = this.userForm.getRawValue();
    criteria.UserId = this.data.userId;
    this._fuseProgressBarService.show();
    criteria.Password = this.password==null? '':this.password;
    this.userService.CreateOrUpdateUser(criteria).subscribe(result =>{
        if(result.Succeeded!=null && result.Succeeded==false){
            result.Errors.forEach(p => {
              if(p.Code == "DuplicateUserName" || p.Code == "DuplicateUserName"){
                this._matSnackBar.open('Email is taken', 'OK', { // todo translate
                  duration        : 2000
              });
              }
            });
        }
        else if(result>0){
          this._matSnackBar.open('Save successfully', 'OK', { // todo translate
            duration        : 2000
        });

        this.dialogRef.close({IsSaved: true});
     }
     this._fuseProgressBarService.hide();
    },
    error=>{
      console.log(error)
      //todo
    });
  }

  addAddress(){
    const dialogRef = this.dialog.open(AddressDialog, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.action == 'yes'){
          this.dialogRef.close({});
      }
    });
  }

}
