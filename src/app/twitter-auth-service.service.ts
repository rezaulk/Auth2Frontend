import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestToken } from './Model/RequestToken';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterAuthServiceService {

  baseUrl = "http://localhost:5000/api/";

  constructor(private http: HttpClient) { }

getRequestToken(): Observable<RequestToken> {
  return this.http.get<RequestToken>(this.baseUrl +'twitterclient/GetRequestToken');
}

}
