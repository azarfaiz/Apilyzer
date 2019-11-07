import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {

  baseUrl = '/apilyzer/rest/';

  constructor(private client: HttpClient) {
  }

  evaluate(payload: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', payload);
    return this.client.post(this.baseUrl + 'evaluate', formData);
  }

  getAllHistory(): Observable<any> {
    return this.client.get(this.baseUrl + 'history');
  }

  fixIssue(id: string, payload: any): Observable<any> {
    return this.client.post(this.baseUrl + 'issue/' + id + '/fix', payload);
  }

  download(id: string) {
    window.open(this.baseUrl + id + '/report', '_blank');
  }
}
