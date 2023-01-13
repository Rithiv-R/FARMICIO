import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CartComponent } from './myComponents/cart/cart.component';
import { CartItemComponent } from './myComponents/cart-item/cart-item.component';
import { FeatureCardComponent } from './myComponents/feature-card/feature-card.component';
import { FeaturesComponent } from './myComponents/features/features.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { HomeOffersComponent } from './myComponents/home-offers/home-offers.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { NavbarComponent } from './myComponents/navbar/navbar.component';
import { OffercardComponent } from './myComponents/offercard/offercard.component';
import { PdhomeComponent } from './myComponents/pdhome/pdhome.component';
import { SearchbarComponent } from './myComponents/searchbar/searchbar.component';
import { ShopComponent } from './myComponents/shop/shop.component';
import { ShopCardComponent } from './myComponents/shop-card/shop-card.component';
import { ShopHeadComponent } from './myComponents/shop-head/shop-head.component';
import { ShopMainComponent } from './myComponents/shop-main/shop-main.component';
import { ShopProductComponent } from './myComponents/shop-product/shop-product.component';
import { CategoriesComponent } from './myComponents/categories/categories.component';
import { CategorycardComponent } from './myComponents/categorycard/categorycard.component';
import { AdderComponent } from './myComponents/adder/adder.component';
import { MembercardComponent } from './myComponents/membercard/membercard.component';
import { TopbrandsComponent } from './myComponents/topbrands/topbrands.component';
import { TopsellComponent } from './myComponents/topsell/topsell.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { ContactusComponent } from './myComponents/contactus/contactus.component';
import { CategoryFullComponent } from './myComponents/category-full/category-full.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategorycardComponent,
    LoginSComponent,
    LoginFComponent,
    StartComponent,
    SHomeComponent,
    SignupFComponent,
    SignupSComponent,
    SignerComponent,
    FHomeComponent,   
    CartComponent ,
    CartItemComponent ,
    FeatureCardComponent ,
    FeaturesComponent ,
    FooterComponent,
    HeaderComponent ,
    HomeOffersComponent ,
    HomepageComponent ,
    NavbarComponent ,
    OffercardComponent ,
    PdhomeComponent,
    SearchbarComponent ,
    ShopComponent,
    ShopCardComponent ,
    ShopHeadComponent,
    ShopMainComponent ,
    ShopProductComponent,
    AdderComponent,
    MembercardComponent,
    TopbrandsComponent,
    TopsellComponent,
    FaqComponent,
    AboutusComponent,
    ContactusComponent,
    CategoryFullComponent ,
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
