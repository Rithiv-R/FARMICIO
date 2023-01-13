import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FHomeComponent } from './myComponents/f-home/f-home.component';
import { SHomeComponent } from './myComponents/s-home/s-home.component';
import { SignerComponent } from './myComponents/signer/signer.component';
import { StartComponent } from './myComponents/start/start.component';

const routes: Routes = [
  {path: '' , component: StartComponent},
  {path:'home-s',component:SHomeComponent},
  {path:'signup',component:SignerComponent},
  {path:'home-f',component:FHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
