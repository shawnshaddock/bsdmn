import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Masternode } from './masternode';

@Injectable()
export class MasternodeService {

  constructor(private apiService: ApiService) { }

  async list(search: string) {
    return await this.apiService.send<Masternode[]>('masternode.list', { searchText: search });
  }

  async get(id: string) {
    return await this.apiService.send<Masternode>('masternode.get', { nodeId: id });
  }
}
