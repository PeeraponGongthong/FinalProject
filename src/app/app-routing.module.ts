import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgistComponent } from './resgist/resgist.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent,
  },{
    path:'A',
    component:ResgistComponent
  },
  {
    path:'C',
    component:ResgistComponent,
    children:[
      {
        path:'A',
        component:LoginComponent
      }
    ]
  }
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
