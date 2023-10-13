import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  { path: 'Comp1', component: XyzComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
