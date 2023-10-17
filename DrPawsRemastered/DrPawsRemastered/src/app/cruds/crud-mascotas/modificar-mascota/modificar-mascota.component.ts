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
  veterinarioId!: number;
  mascotaId!: number;

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
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;
    this.mascotaId = +this.route.snapshot.paramMap.get('idMascota')!;

    // Crear el formulario
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.pattern(/^\d*(\.\d{0,2})?$/)]],
      enfermedad: ['', Validators.required]
    });

    // Cargar datos iniciales de la mascota
    this.mascotaService.getMascota(this.mascotaId).subscribe(mascota => {
      this.mascotaForm.patchValue(mascota);
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.valid)
    {
      const mascota: Mascota = this.mascotaForm.value;
      mascota.id = this.mascotaId;

      // Llama al método para actualizar la mascota
      this.mascotaService.updateMascota(this.mascotaId, mascota).subscribe(response => {
        alert('Mascota actualizada exitosamente!');
          this.router.navigate([`/login-administrativo/dashboard-veterinarios/${this.veterinarioId}`]);
        },
        error => {
          alert('Ocurrió un error al actualizar la mascota.');
        }
      );
    }
  }
}
