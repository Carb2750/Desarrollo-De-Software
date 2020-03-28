import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'login',
    templateUrl: './menu.components.html'
})

export class MenuComponent{
    public usuario:any[];
    constructor(public service:AppService, private router:Router) {
        this.usuario = [];
    }

    
    
    
    aver(){
        this.router.navigateByUrl('/registro');
    }
    aver2(){
        this.router.navigateByUrl('/listado_usuarios');
    }

    

        
}