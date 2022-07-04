import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1wayComponent } from './form1way/form1way.component';
import { Forme2wayComponent } from './forme2way/forme2way.component';
import { Formn2wayComponent } from './formn2way/formn2way.component';
import { Forms2wayComponent } from './forms2way/forms2way.component';
import { Formw2wayComponent } from './formw2way/formw2way.component';
import { HomeComponent } from './home/home.component';
import { OneWayComponent } from './one-way/one-way.component';
import { ReceiveComponent } from './receive/receive.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'oneWay',component:OneWayComponent},
  {path:'twoWay',component:TwoWayComponent},
  {path:'form1way',component:Form1wayComponent},
  {path:'formn2way', component:Formn2wayComponent},
  {path:'forms2way',component:Forms2wayComponent},
  {path:'formw2way', component:Formw2wayComponent},
  {path:'forme2way', component:Forme2wayComponent},
  {path:'receive', component:ReceiveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
