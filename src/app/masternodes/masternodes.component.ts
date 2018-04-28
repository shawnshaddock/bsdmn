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
  search: string;
  modelChanged = new Subject();

  constructor(private masternodeService: MasternodeService) {
    this.modelChanged
      .debounceTime(400)
      .subscribe(() => {
        this.getMasternodes();
      });
  }

  async ngOnInit() {
    this.getMasternodes();
  }

  async getMasternodes() {
    this.masternodes = await this.masternodeService.list(this.search);
  }

  onSearchChanged() {
    this.modelChanged.next();
  }
}
