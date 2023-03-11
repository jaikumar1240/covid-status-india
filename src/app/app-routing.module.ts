import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NationalViewComponent } from './components/national-view/national-view.component';
import { StateViewComponent } from './components/state-view/state-view.component';

const routes: Routes = [
  { path: '', component: NationalViewComponent },
  { path: 'national', component: NationalViewComponent },
  { path: 'state', component: StateViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
