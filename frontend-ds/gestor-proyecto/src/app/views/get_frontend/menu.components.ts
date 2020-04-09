import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'login',
    templateUrl: './menu.components.html'
})

export class MenuComponent implements  OnInit{
    public usuario:any[];
    constructor(public service:AppService, private router:Router) {
        this.usuario = [];
    }

    
    
    ngOnInit(){
        console.log(this.service.get_session());
        console.log(this.service.get_usuariologueado());
        
    }
    
    aver(){
        this.router.navigateByUrl('/registro');
    }
    aver2(){
        this.router.navigateByUrl('/listado_usuarios');
    }

    aver3(){
        this.service.reset_session();
        this.router.navigateByUrl('/ingreso');
        console.log(this.service.get_session());
        console.log(this.service.get_usuariologueado());
    }

    

        
}