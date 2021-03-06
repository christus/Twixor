import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEncapsComponent } from './create-encaps/create-encaps.component';
import { EncapsComponent } from './encaps/encaps.component';
import { MainencapsComponent } from './mainencaps.component';


const routes: Routes = [
  {
    path:"",
    component:MainencapsComponent,
    children:[
      {
        path: "dashboard",
        component: EncapsComponent
      },
      {
        path: "createencaps",
        component: CreateEncapsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncapsRoutingModule { }
