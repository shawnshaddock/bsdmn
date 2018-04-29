import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MasternodesComponent } from './masternodes/masternodes.component';
import { MasternodeDetailComponent } from './masternode-detail/masternode-detail.component';

const routes: Routes = [
  { path: '', component: MasternodesComponent },
  { path: ':id', component: MasternodeDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}