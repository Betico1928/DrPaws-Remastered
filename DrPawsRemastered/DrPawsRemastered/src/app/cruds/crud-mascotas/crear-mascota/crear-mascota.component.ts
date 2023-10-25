import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../../service/usuario/usuario.service";
import {Usuario} from "../../../model/usuario";

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit
{
  mascotaForm!: FormGroup;
  veterinarioId!: number;

  // Lista de Usuarios:
  usuarios!: Usuario[];

  constructor(
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void
  {
    // Obtener ID desde la ruta
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;

    // Extraer a todos los dueños de mascotas para ponerlos en la lista desplegable:
    this.usuarioService.getAllUsuarios().subscribe(usuariosEntrantes => {
      this.usuarios = usuariosEntrantes;

      console.log(usuariosEntrantes)
    });
    this.initForm();
  }

  initForm(): void {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.pattern(/^\d*(\.\d{0,2})?$/)]],
      enfermedad: ['', Validators.required],
      cedulaDueno: ['', Validators.required]
    });
  }

  onSubmit(): void
  {
    // Asegurarse de que la cédula sea tratada como un string
    const cedulaIngresada = this.mascotaForm.get('cedulaDueno')?.value.toString();

    // Comprobar si la cédula ingresada o seleccionada existe en la lista de usuarios
    const usuarioExistente = this.usuarios.some(usuario => usuario.cedula === cedulaIngresada);

    if (!usuarioExistente) {
      alert('ALERTA - Este dueño no se encuentra inscrito en la base de datos.');
      return;  // Salimos temprano de la función para no seguir con el envío
    }
    else
    {
      // Si el usuario existe, entonces asignamos el ID del usuario a la mascota
      this.mascotaForm.value.usuario = this.usuarios.find(usuario => usuario.cedula === cedulaIngresada);
    }

    if (this.mascotaForm.valid)
    {
      this.mascotaService.createMascota(this.mascotaForm.value).subscribe(
        data => {
          alert('Mascota creada exitosamente!');
          this.router.navigate([`/login-administrativo/dashboard-veterinarios/${this.veterinarioId}`]);
        },
        error => {
          alert('Ocurrió un error al crear la mascota.');
          console.error(error);
        }
      );
    }
  }
}
