import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators, FormControl, FormBuilder } from '@angular/forms';

import {
  DataTableModule,
  GrowlModule,
  MenuItem,
  TabViewModule,
  TreeModule, TreeNode,
  MessageModule,
  SelectItem,
  PanelModule,
  DropdownModule,
  ChipsModule,
  InputTextModule,
  ButtonModule,
  InputTextareaModule,
  TabMenuModule,
  CodeHighlighterModule
 } from 'primeng/primeng';

import { AngularSplitModule } from 'angular-split';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AdminComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    DataTableModule,
    GrowlModule,
    TabViewModule,
    MessageModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    TabMenuModule,
    CodeHighlighterModule,
    ChipsModule,
    TreeModule,
    AngularSplitModule
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
