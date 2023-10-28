import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VeterinarioService} from "../../service/veterinario/veterinario.service";
import {MascotaService} from "../../service/mascota/mascota-service.service";
import {Tratamiento} from "../../model/tratamiento";
import {TratamientoService} from "../../service/tratamiento/tratamiento.service";
import {Medicamento} from "../../model/medicamento";
import {MedicamentoService} from "../../service/medicamento/medicamento.service";

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

  // Lista de medicamentos:
  medicamentos!: Medicamento[];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,

    private mascotaService : MascotaService,
    private veterinarioService : VeterinarioService,
    private tratamientoService : TratamientoService,
    private medicamentoService : MedicamentoService
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
      medicamento: [''],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.veterinarioId = +this.route.snapshot.paramMap.get('idVeterinario')!;
    this.mascotaId = +this.route.snapshot.paramMap.get('idMascota')!;

    // Extraer los medicamentos para ponerlos en la lista desplegable:
    this.medicamentoService.getAllMedicamentos().subscribe(medicamentosEntrantes => {

      // Revisa a ver si hay unidades disponibles:
      medicamentosEntrantes = medicamentosEntrantes.filter(medicamento => medicamento.unidadesDisponibles > 0);

      // Cargar los medicamentos en la lista desplegable:
      this.medicamentos = medicamentosEntrantes;

      console.log('Medicamentos obtenidos:', medicamentosEntrantes);
    }, error => {
      console.error('Error al obtener los medicamentos:', error);
    });

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
  }

  onSubmit()
  {
    if (this.datosForm.valid)
    {
      // Calcular el costo del tratamiento:
      // Convertir idMedicamentoSeleccionado a número
      const idMedicamentoNum = Number(this.datosForm.get('medicamento')!.value);

      // Buscar el medicamento seleccionado en la lista
      const medicamentoSeleccionado = this.medicamentos.find(medicamento => medicamento.id === idMedicamentoNum);

      // Obtener el precio del medicamento seleccionado
      let precioMedicamento: number = 0.0;
      if (medicamentoSeleccionado)
      {
        precioMedicamento = medicamentoSeleccionado.precioVenta;
      }

      // Establecer el costo del tratamiento como el precio del medicamento más 400.0 (equivalente al valor de la consulta)
      const costoTratamiento = precioMedicamento + 400.0;

      const tratamiento: Tratamiento = {
        id: 0,
        nombre: this.datosForm.get('nombreTratamiento')!.value,
        descripcion: this.datosForm.get('descripcion')!.value,
        fechaInicio: this.datosForm.get('fechaInicio')!.value,
        fechaFin: this.datosForm.get('fechaFin')!.value,
        costo: costoTratamiento,
        frecuencia: this.datosForm.get('frecuencia')!.value,
        idMascota: this.mascotaId,
        idVeterinario: this.veterinarioId,
        idMedicamento: this.datosForm.get('medicamento')!.value
      }

      this.tratamientoService.createTratamiento(tratamiento, this.mascotaId, this.datosForm.get('medicamento')!.value, this.veterinarioId).subscribe(response =>
      {
        alert("Tratamiento generado exitosamente.");
        console.log('Tratamiento generado exitosamente.', response);
        this.router.navigate([`/login-administrativo/dashboard-veterinarios/${this.veterinarioId}`]);
      }, error => {
        // Maneja los errores que puedan surgir
        console.error('Error al generado el tratamiento: ', error);
      });
    }
  }
}

