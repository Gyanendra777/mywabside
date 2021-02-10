import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { BOOTSTRAPComponent } from './bootstrap/bootstrap.component';
import { CssComponent } from './css/css.component';
import { GithubComponent } from './github/github.component';
import { HTMLComponent } from './html/html.component';
import { JAVASCRIPTComponent } from './javascript/javascript.component';
import { TYPESCRIPTComponent } from './typescript/typescript.component';

const routes: Routes = [

  
  {path:'githubComponent', component : GithubComponent},
  {path:'CssComponent', component : CssComponent},
  {path:'AngularComponent', component: AngularComponent},
  {path:'', component: GithubComponent},
  {path:'JAVASCRIPTComponent', component : JAVASCRIPTComponent},
  {path:'HTMLComponent', component : HTMLComponent},
  {path:'BOOTSTRAPComponent', component : BOOTSTRAPComponent},
  {path:'TYPESCRIPTComponent', component : TYPESCRIPTComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [AngularComponent,GithubComponent,CssComponent,JAVASCRIPTComponent,HTMLComponent,BOOTSTRAPComponent,TYPESCRIPTComponent]