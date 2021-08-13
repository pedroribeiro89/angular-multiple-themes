import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemeExampleComponent} from "./theme-example/theme-example.component";
import {MaterialExampleComponent} from "./material-example/material-example.component";
import {EnvExampleComponent} from "./env-example/env-example.component";

const routes: Routes = [
  { path: 'theme', component: ThemeExampleComponent },
  { path: 'material', component: MaterialExampleComponent },
  { path: 'env', component: EnvExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
