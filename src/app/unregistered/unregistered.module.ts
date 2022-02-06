import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes=[
  {path:'', redirectTo:"/user/profile", pathMatch:"full"},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormGroup,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UnregisteredModule { }
