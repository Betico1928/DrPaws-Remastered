import { Router } from '@angular/router';
import { AutenticacionService } from './../service/autenticar/autenticacion.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-administrativo',
  templateUrl: './login-administrativo.component.html',
  styleUrls: ['./login-administrativo.component.css']
})
export class LoginAdministrativoComponent {


  loginForm!: FormGroup;

  estadoAutenticacion: boolean = true;

  tipoUsuario!: string;





  constructor(
    private  autenticacionService :  AutenticacionService,
    private  router: Router,
    private fb: FormBuilder
  ){
    this.loginForm = this.fb.group({
      correo: [''],
      contrasenna:['']
    });

  }

  ngOnInit():void{
    console.log(this.router.url);
    if(this.router.url==="/login-administrativo"){
      this.tipoUsuario = "vet";
      console.log("Es un veterinario");
    }
    else if(this.router.url==="/loginUsuario"){
      this.tipoUsuario = "usu";
      console.log("Es un usuario");
    }
  }




  onSubmit(): void{
    console.log("Hello there")
    console.log(this.loginForm.value);

    if(this.tipoUsuario === "vet"){
      this.autenticacionService.autenticarVet(this.loginForm.value).subscribe(
        (response) =>{
          console.log("Autenticado")
          // Redirigir al dashboard de vet
          this.router.navigate(["/login-administrativo/dashboard-veterinarios"]);
        }
        ,(error)=>{
          console.error("Mal")
          this.estadoAutenticacion = false;
        }
      )
    }
    else{
      console.log("Ingresando como tipo usuario")
      this.autenticacionService.autenticarUser(this.loginForm.value).subscribe(
        (response)=>{
          console.log("Usuario autenticado")
          console.log(response.id)
          // Redirigir al dashboard de usuario
          this.router.navigate(["login-usuario/dashboard-usuario/"+response.id])
        }
        ,(error)=>{
          console.error("Incorrecto")
          this.estadoAutenticacion = false;
        }
      )
    }
  }



}
