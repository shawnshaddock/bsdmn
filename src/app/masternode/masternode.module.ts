import { MasternodeRoutingModule } from './masternode.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasternodeComponent } from './masternode.component';

@NgModule({
  imports: [
    CommonModule,
    MasternodeRoutingModule
  ],
  declarations: [MasternodeComponent]
})
export class MasternodeModule { }