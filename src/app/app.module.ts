import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { Form1wayComponent } from './form1way/form1way.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { initializeApp } from '@angular/fire/app';
import { ReceiveComponent } from './receive/receive.component';
import { Formn2wayComponent } from './formn2way/formn2way.component';
import { Forms2wayComponent } from './forms2way/forms2way.component';
import { Formw2wayComponent } from './formw2way/formw2way.component';
import { Forme2wayComponent } from './forme2way/forme2way.component';
import { NavebarComponent } from './navebar/navebar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneWayComponent,
    TwoWayComponent,
    Form1wayComponent,
    ReceiveComponent,
    Formn2wayComponent,
    Forms2wayComponent,
    Formw2wayComponent,
    Forme2wayComponent,
    NavebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
