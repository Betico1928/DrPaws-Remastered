import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../../service/usuario/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent
{
  veterinarioId!: number;
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuarioForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      contrasenna: ['', Validators.required]
    });
  }

  ngOnInit(): void
  {
    // Obtener ID desde la ruta
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;
  }

  onSubmit(): void
  {
    console.log(this.usuarioForm)

    if (this.usuarioForm.valid)
    {
      this.usuarioService.createUsuario(this.usuarioForm.value).subscribe(
        response => {
          alert('Dueño creado exitosamente!');
          this.router.navigate([`administrativo/dashboard-veterinaria`]);
        },
        error => {
          alert("Error creando usuario: " + error);
        }
      );
    }
  }
}
