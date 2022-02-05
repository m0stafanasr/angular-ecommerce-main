import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes:Routes=[
  {path:'', redirectTo:"/user/registernewUser", pathMatch:"full"},
  {path:'register', component: NewUserComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [NewUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnregisteredModule { }
