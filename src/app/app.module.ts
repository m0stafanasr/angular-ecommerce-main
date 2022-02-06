import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShadowDirective } from './directives/shadow.directive';
import { GetAgePipe } from './pipes/get-age.pipe';
import { CreditcardPipe } from './pipes/creditcard.pipe';
import { MainOrderComponent } from './main-order/main-order.component';
import { MainComponent } from './components/main/main.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { LoginComponent } from './components/login/login.component';
import { ModalDirective } from './directives/modal.directive';
import {HttpClientModule} from '@angular/common/http';
import { NewUserComponent } from './components/new-user/new-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SidemenuComponent,
    ShadowDirective,
    GetAgePipe,
    CreditcardPipe,
    MainOrderComponent,
    MainComponent,
    MainpageComponent,
    ProductDetailsComponent,
    EditProductComponent,
    AddNewComponent,
    LoginComponent,
    ModalDirective,
    NewUserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
