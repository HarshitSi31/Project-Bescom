import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisFormComponent } from './components/regis-form/regis-form.component';
import { FaqComponent } from './components/faq/faq.component';
import { MaterialModule } from '../material/material.module';

const reUseComponents: any = [
  HeaderComponent,
  FooterComponent,
  LoginFormComponent,
  RegisFormComponent,
  FaqComponent
];

const reUseModules: any = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...reUseComponents],
  imports: [...reUseModules],
  exports: [...reUseComponents, ...reUseModules],
})
export class SharedModule {}
