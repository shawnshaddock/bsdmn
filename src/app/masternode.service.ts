import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Masternode } from './masternode';

@Injectable()
export class MasternodeService {

  constructor(private apiService: ApiService) { }

  async list(search: string) {
    let params = {
      searchText: search
    };

    return await this.apiService.send<Masternode[]>('masternode.list', params);
  }
}
