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

  fixIssue(evalId: string, id: string, payload: any): Observable<any> {
    return this.client.post(this.baseUrl + 'evaluations/' + evalId + '/issues/' + id + '/fix', payload);
  }

  downloadReport(id: string) {
    window.open(this.baseUrl + id + '/report', '_blank');
  }

  downloadFile(id: string) {
    window.open(this.baseUrl + id + '/download', '_blank');
  }

  getAllConfiguredRules() {
    return this.client.get(this.baseUrl + 'rules');
  }

  updateConfiguredRules(payload: any) {
    return this.client.post(this.baseUrl + 'rules', payload);
  }
}
