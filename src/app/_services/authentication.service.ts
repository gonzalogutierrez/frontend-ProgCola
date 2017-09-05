import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    base:string='http://localhost:81/';
    /*post:string='message';*/
    get:string='messages';
	post:string='login'

    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base + this.post, JSON.stringify({ email: username, password: password }),{ headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.data));
                    //return user;
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('projects');
        localStorage.removeItem('urlPaypal');
    }
}