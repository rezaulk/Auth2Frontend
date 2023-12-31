import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  oidcLogin(): void {
    const client: google.accounts.oauth2.CodeClient = google.accounts.oauth2.initCodeClient({
      client_id: environment.clientId,
      scope: 'openid profile email',
      ux_mode: 'redirect',
      redirect_uri: environment.apiUrl + '/api/Auth/oidc/signin',
      state: '12345GG',
    });
    client.requestCode();
  }



  extractToken(idToken: string): Observable<{
    userID: string;
    userName: string;
    id: string;
    picture: string;
    email: string;
  }> {
    const { sub: userID, name: userName, id: id, picture, email } = jwtDecode<any>(idToken);
    console.log(idToken);
    return of({
      userID,
      userName,
      id,
      picture,
      email,
    });
  }

  /**
   * 使用Google的API來驗證Token。參考文件: https://developers.google.com/identity/sign-in/web/backend-auth#calling-the-tokeninfo-endpoint
   *
   * @param {string} idToken
   * @return {*}
   * @memberof AuthenticationService
   */
  verifyToken(idToken: string): Observable<unknown> {
    return this.http.get('https://oauth2.googleapis.com/tokeninfo', {
      params: { id_token: idToken },
    });
  }



}
