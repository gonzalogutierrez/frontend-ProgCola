import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models/index';
import { ProjectService, AlertService, PaypalService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    model: any = {};
    currentUser: User;
    projects: any[];
    loading = false;
    returnUrl: string;
   //project: Project;

    constructor(
        private projectService: ProjectService, 
        private paypalService: PaypalService, 
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            //this.project = JSON.parse(localStorage.getItem('projects'));
            //this.projects = JSON.parse(localStorage.getItem('projects')) || [];
        }

    ngOnInit() {
        this.loadAllProject();
    }

    paypal(price:string, id:string, name:string) {
        this.loading = true;
        this.paypalService.paypal(price, id, name)
            .subscribe(
                data => {
                    let urlPaypal = JSON.parse(localStorage.getItem('urlPaypal'));
                   //this.router.navigate([urlPaypal.redirectUrl]);
                   window.location.href = urlPaypal.redirectUrl;
                },
                error => {
                    this.alertService.error("Error interno con paypal");
                    this.loading = false;
                });
    }

    private loadAllProject() {
        this.projectService.allProject()
        .subscribe(
            data => {
                this.projects = JSON.parse(localStorage.getItem('projects')) || [];
                //this.router.navigate([this.returnUrl]);
                //this.alertService.success("Elige un proyecto");
            },
            error => {
                this.alertService.error("No hay proyectos!");
                //this.loading = false;
            });
    }

}