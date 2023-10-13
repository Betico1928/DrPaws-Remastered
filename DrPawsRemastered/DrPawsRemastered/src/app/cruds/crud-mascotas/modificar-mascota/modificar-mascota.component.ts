import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mascota} from "../../../model/mascota";

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})

export class ModificarMascotaComponent implements OnInit {
  mascotaForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Obtener ID desde la ruta
    this.id = +this.route.snapshot.paramMap.get('id')!;

    // Crear el formulario
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', Validators.required],
      enfermedad: ['', Validators.required]
    });

    // Cargar datos iniciales de la mascota
    this.mascotaService.getMascota(this.id).subscribe(mascota => {
      this.mascotaForm.patchValue(mascota);
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      this.mascotaService.updateMascota(this.id, this.mascotaForm.value).subscribe(() => {
          alert('Mascota actualizada exitosamente!');
          this.router.navigate(['login-administrativo/dashboard-veterinarios']);
        },
        error => {
          alert('Ocurrió un error al actualizar la mascota.');
          console.error(error);
        }
      );
    }
  }
}
