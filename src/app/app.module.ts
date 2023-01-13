import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginFComponent } from './myComponents/login-f/login-f.component';
import { StartComponent } from './myComponents/start/start.component';
import { LoginSComponent } from './myComponents/login-s/login-s.component';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { SHomeComponent } from './myComponents/s-home/s-home.component';
import { SignupFComponent } from './myComponents/signup-f/signup-f.component';
import { SignupSComponent } from './myComponents/signup-s/signup-s.component';
import { SignerComponent } from './myComponents/signer/signer.component';
import { FHomeComponent } from './myComponents/f-home/f-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSComponent,
    LoginFComponent,
    StartComponent,
    SHomeComponent,
    SignupFComponent,
    SignupSComponent,
    SignerComponent,
    FHomeComponent,   
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
