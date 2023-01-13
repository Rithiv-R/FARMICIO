import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './myComponents/aboutus/aboutus.component';
import { CategoriesComponent } from './myComponents/categories/categories.component';
import { CategoryFullComponent } from './myComponents/category-full/category-full.component';
import { ContactusComponent } from './myComponents/contactus/contactus.component';
import { FHomeComponent } from './myComponents/f-home/f-home.component';
import { FaqComponent } from './myComponents/faq/faq.component';
import { HomepageComponent } from './myComponents/homepage/homepage.component';
import { SHomeComponent } from './myComponents/s-home/s-home.component';
import { ShopComponent } from './myComponents/shop/shop.component';
import { SignerComponent } from './myComponents/signer/signer.component';
import { StartComponent } from './myComponents/start/start.component';

const routes: Routes = [
  {path: '' , component: StartComponent},
  {path:'home-s',component:HomepageComponent},
  {path:'signup',component:SignerComponent},
  {path:'home-f',component:FHomeComponent},
  {path:'shop', component:CategoryFullComponent},
  {path: 'shopping/:name', component:ShopComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'aboutus',component:AboutusComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
