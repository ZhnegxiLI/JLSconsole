import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path     : 'users',
      component: UsersComponent,
  },
  {
      path     : 'user',
      component: UserComponent,
  }

];

@NgModule({
  declarations: [UserComponent, UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
