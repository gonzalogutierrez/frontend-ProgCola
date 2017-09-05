import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models/index';
import { ProjectService, AlertService, PaypalService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'paypal.component.html'
})

export class PaypalComponent implements OnInit {
    model: any = {};
    currentUser: User;
    projects: any[];
    loading = false;
    returnUrl: string;
    message:string;
   //project: Project;

    constructor(
        private projectService: ProjectService, 
        private paypalService: PaypalService, 
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) {
        }

    ngOnInit() {
        //let url="cancel"
        let path = this.route.snapshot.url.join('/');
        if (path=='cancel'){
            this.message="Pago cancelado!";
            this.returnUrl="cancel";
        }else{
            this.message="Pago realizado con exito!";
            this.returnUrl="execute";
        }
        this.paypalService.confirmacionPago(this.returnUrl)
        .subscribe(
            data => {
                this.alertService.success(this.message);
            },
            error => {
                this.alertService.error("Error interno, vuelva a intentarlo mas tarde!");
                //this.loading = false;
            });
    }

}