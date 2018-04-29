import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { ApiService } from './api.service';
import { MasternodeService } from './masternode.service';

import { AppComponent } from './app.component';
import { MasternodesComponent } from './masternodes/masternodes.component';
import { MasternodeDetailComponent } from './masternode-detail/masternode-detail.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MasternodesComponent,
    MasternodeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    MasternodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
