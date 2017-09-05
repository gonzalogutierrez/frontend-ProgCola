import { Injectable } from '@angular/core';
import { Message } from "./message.model";
import { Http, Headers, Response,RequestOptionsArgs,RequestMethod   } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import 'rxjs/Rx';


@Injectable()
export class MessageService {

    constructor(private http: Http) { }

    //base:string='https://pruebanodejs-pg2.herokuapp.com/';
    
    base:string='http://localhost:81/';
    /*post:string='message';*/
    get:string='messages';
	post:string='login'

    getMessages(): Observable<any>{
        console.log(this.base + this.get);
        return this.http.get(this.base + this.get).map(
            (data: Response)=>{
                const extracted = data.json();
                const msgArray:Message[]=[];
                let message;
                for(let item of  extracted.data){
                    message=new Message(item.content);
                    msgArray.push(message);
                }
                return msgArray;
            }
        );
    }

    saveMessage(message: Message): Observable<any> {
        const body= JSON.stringify(message);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(this.base + this.post, body, { headers: headers});
    }
	
	loginService(username:string, pass:string): Observable<boolean> {
        /*const body= JSON.stringify(message);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post(this.base + this.post, body, { headers: headers});*/
		
		/**const body = JSON.stringify({username, pass});
        const headers = new Headers({'Content-Type':'application/json'});
		console.log(this.base + this.post);
        return this.http.post(this.base + this.post, body, { headers: headers});*/

        /*const headers = new Headers();
        headers.append("Content-Type", 'application/json');*/
        //let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        
       /* headers.append('Accept', 'application/json');
        let requestOptions = new RequestOptionsArgs({
            method: RequestMethod.Post,
            url: this.base,
            headers: headers,
            body: JSON.stringify({ username: username, password: pass })
        });*/
        //let options: RequestOptionsArgs  = new RequestOptionsArgs ({ headers: headers });
        return this.http.post(this.base + this.post, JSON.stringify({ email: username, password: pass }),{ headers: headers })
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
                // return false to indicate failed login
               return true;
               /*let retorno=response.json().process;
               if (retorno=='success'){
                   return true;
               }else{
                   return false;
               }*/
        });
        
    }
}