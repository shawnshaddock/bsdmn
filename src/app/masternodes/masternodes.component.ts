import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import "rxjs/Rx";

import { Masternode } from '../masternode';
import { MasternodeService } from '../masternode.service';

@Component({
  selector: 'app-masternodes',
  templateUrl: './masternodes.component.html',
  styleUrls: ['./masternodes.component.css']
})
export class MasternodesComponent implements OnInit {
  masternodes: Masternode[];
  masternodeCount: number;
  donateAddress: string;
  search: string;
  modelChanged = new Subject();

  constructor(private masternodeService: MasternodeService) {
    this.modelChanged
      .debounceTime(400)
      .subscribe(() => {
        this.getMasternodes();
      });
  }

  ngOnInit() {
    this.getMasternodes();
    this.getMasternodeCount();
    this.getDonateAddress();
  }

  async getMasternodes() {
    this.masternodes = await this.masternodeService.list(this.search);
  }

  async getMasternodeCount() {
    this.masternodeCount = await this.masternodeService.getCount();
  }

  getDonateAddress() {
    this.donateAddress = 'iFzmPYhaSK3LN8v6NCxfVYjY2DeH1oowd1';
  }

  onSearchChanged() {
    this.modelChanged.next();
  }
}
