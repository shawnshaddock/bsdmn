import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Masternode } from '../masternode';
import { MasternodeService } from '../masternode.service';

@Component({
  selector: 'app-masternode-detail',
  templateUrl: './masternode-detail.component.html',
  styleUrls: ['./masternode-detail.component.css']
})
export class MasternodeDetailComponent implements OnInit {
  masternode: Masternode;

  constructor(private route: ActivatedRoute, private location: Location, private masternodeService: MasternodeService) { }

  ngOnInit() {
    this.getMasternode();
  }

  async getMasternode() {
    const id = this.route.snapshot.paramMap.get('id');
    this.masternode = await this.masternodeService.get(id);
  }

  onBack() {
    this.location.back();
  }
}