import {Component, OnDestroy, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm, FormControlDirective} from '@angular/forms';
import { AppService } from 'src/app/app.service';
import swal from 'sweetalert2';

@Component({
    selector: 'login',
    templateUrl: './login.components.html'
})

export class LoginComponent implements OnDestroy{

    

    
    @ViewChild('login_form')login_form:FormControlDirective;
    public submitted = false;
    public loading = false;
    public login_data = {
        usuario:"",
        pass:""
    }

    constructor(public service:AppService, private router:Router) {
        //this.pageSettings.pageEmpty = true;
    }

    ngOnDestroy(){
        //this.pageSettings.pageEmpty = false;
    }
    
    aver(){
        this.router.navigateByUrl('/menu');
    }

    login(){
        if(this.login_form.valid){
            this.submitted = false;
            this.loading = true;
            var response;
            var load = {
                usuario:this.login_data.usuario,
                pass:this.login_data.pass
            };
            console.log(load);
            this.service.login(load).subscribe(
                data => response = data,
                err =>{
                    if(err.status == 400){
                        swal.fire({
                            icon: 'error',
                            title: 'Error de Autenticación',
                            text: 'Las credenciales proporcionadas son incorrectas',
                        });
                    }else{
                        swal.fire({
                            icon: 'error',
                            title: 'Error interno del servidor',
                        });
                    }
                    this.loading=false;
                },
                () => {
                    try{
                        if(response){
                            this.service.set_usuariologueado(this.login_data.usuario);
                            this.service.set_session(response);
                            this.router.navigateByUrl('/menu');
                        }else{
                            swal.fire({
                                icon: 'error',
                                title: 'Error interno del servidor',
                            });
                            this.loading=false;
                        }
                        this.loading=false;
                    }catch(error){
                        swal.fire({
                            icon: 'error',
                            title: 'Error interno del servidor',
                        });
                        this.loading=false;
                    }
                }
            );
        }else{
            this.submitted = true;
        }
    }

        
}