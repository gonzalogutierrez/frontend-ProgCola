import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ProjectService {
    constructor(private http: Http) { }

    base:string='http://localhost:81/';
    /*post:string='message';*/
    get:string='home';

    allProject() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.base + this.get)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let projects = response.json();
                localStorage.setItem('projects', JSON.stringify(projects.data.products));
                return projects;
            });
    }

}