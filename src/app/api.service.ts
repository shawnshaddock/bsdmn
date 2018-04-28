import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from './api-response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  async send<T>(method: string, params: any) {
    let request = {
      jsonrpc: '2.0',
      method: method,
      params: params
    }

    let response = await this.http.post<ApiResponse<T>>('http://api.bsdmn.info/', request).toPromise();

    return response.result;
  }
}