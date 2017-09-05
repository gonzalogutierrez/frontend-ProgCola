import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PaypalService {
    constructor(private http: Http) { }

    base:string='http://localhost:81/';
    /*post:string='message';*/
	post:string='paynow'

    paypal(price: string, id: string, name:string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.base + this.post, JSON.stringify({ price: price, id: id, name: name }),{ headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let paypal = response.json();
                if (paypal) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('urlPaypal', JSON.stringify(paypal.data));
                    //return user;
                }

                return paypal;
            });
    }

    confirmacionPago(url: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base + url)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let confirmacion = response.json();
                /*if (paypal) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('urlPaypal', JSON.stringify(paypal.data));
                    //return user;
                }*/

                return confirmacion;
            });
    }

}