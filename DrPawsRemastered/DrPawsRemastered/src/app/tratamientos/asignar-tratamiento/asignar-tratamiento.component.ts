import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";
import {MascotaService} from "../../service/mascota/mascota-service.service";

@Component({
  selector: 'app-asignar-tratamiento',
  templateUrl: './asignar-tratamiento.component.html',
  styleUrls: ['./asignar-tratamiento.component.css']
})
export class AsignarTratamientoComponent implements OnInit
{
  datosForm: FormGroup;
  veterinarioId!: number;
  mascotaId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,

    private mascotaService : MascotaService,
    private veterinarioService : VeterinarioService
  ) {
    this.datosForm = this.fb.group({
      idVeterinario: ['', Validators.required],
      nombreVeterinario: ['', Validators.required],
      especialidadVeterinario: ['', Validators.required],

      nombreMascota: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(0.01)]],
      enfermedad: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;
    this.mascotaId = +this.route.snapshot.paramMap.get('idMascota')!;

    // Extraer los datos de mascota y veterinario:
    this.veterinarioService.getVeterinario(this.veterinarioId).subscribe(veterinario => {
      this.datosForm.patchValue({
        idVeterinario: veterinario.id,
        nombreVeterinario: veterinario.nombre,
        especialidadVeterinario: veterinario.especialidad
      });
    });

    this.mascotaService.getMascota(this.mascotaId).subscribe(mascota => {
      this.datosForm.patchValue({
        nombreMascota : mascota.nombre,
        raza : mascota.raza,
        edad : mascota.edad,
        peso : mascota.peso,
        enfermedad : mascota.enfermedad
      });
    });
  }

  onSubmit() {
    alert("Hola")
  }
}
