import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostComponent } from './allpost/allpost.component';
import { ThispostComponent } from './thispost/thispost.component';

const routes: Routes = [
  {
    path:'',
    component:AllpostComponent
  },
  {
    path:'post/:id',
    component:ThispostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
