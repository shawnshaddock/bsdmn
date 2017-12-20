import { Routes, RouterModule } from '@angular/router';
import { MasternodeComponent } from './masternode.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'masternode', component: MasternodeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasternodeRoutingModule {}