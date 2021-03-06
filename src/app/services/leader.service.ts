import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
/* import { LEADERS } from '../shared/leaders'; */
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BaseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(BaseURL + 'leaders')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(BaseURL + 'leaders/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getLeaderFeatured(): Observable<Leader> {
    return this.http.get<Leader>(BaseURL + 'leaders?featured=true')
    .pipe(map(leaders => leaders[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
