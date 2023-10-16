import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";
import {MascotaService} from "../../service/mascota/mascota-service.service";
import {Tratamiento} from "../../model/tratamiento";
import {TratamientoService} from "../../service/tratamiento/tratamiento.service";

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

  // Almacenamiento de datos de veterinario:
  nombreVeterinario!: string;
  especialidadVeterinario!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,

    private mascotaService : MascotaService,
    private veterinarioService : VeterinarioService,
    private tratamientoService : TratamientoService
  ) {
    this.datosForm = this.fb.group({
      nombreMascota: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.min(0.01)]],
      enfermedad: ['', Validators.required],

      nombreTratamiento: ['', Validators.required],
      descripcion: ['', Validators.required],
      frecuencia: ['', Validators.required],
      medicamento: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;
    this.mascotaId = +this.route.snapshot.paramMap.get('idMascota')!;

    // Extraer los datos de mascota y veterinario:
    this.veterinarioService.getVeterinario(this.veterinarioId).subscribe(veterinario => {
      this.nombreVeterinario = veterinario.nombre;
      this.especialidadVeterinario = veterinario.especialidad;
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

    // Extraer los medicamentos para ponerlos en la lista desplegable:
    this.tratamientoService.getMedicamentos().subscribe(medicamentos => {
      this.medicamentos = medicamentos;
    }
  }

  onSubmit() {
    if (this.datosForm.valid) {
      const tratamiento: Tratamiento = {
        id: 0,
        nombre: this.datosForm.get('nombreTratamiento')!.value,
        descripcion: this.datosForm.get('descripcion')!.value,
        fechaInicio: this.datosForm.get('fechaInicio')!.value,
        fechaFin: this.datosForm.get('fechaFin')!.value,
        costo: 0,
        frecuencia: this.datosForm.get('frecuencia')!.value,
        idMascota: this.mascotaId,
        idVeterinario: this.veterinarioId,
        idMedicamento: this.datosForm.get('medicamento')!.value
      }

      this.tratamientoService.addTratamiento(tratamiento).subscribe(response => {
        alert("Tratamiento generado exitosamente.");
        console.log('Tratamiento generado exitosamente.', response);
      }, error => {
        // Maneja los errores que puedan surgir
        console.error('Error al generado el tratamiento:', error);
      });
    }
  }
}

