import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MascotaServiceService} from "../../service/mascota/mascota-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mascota} from "../../model/mascota";

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})

export class ModificarMascotaComponent
{
  @Input()
  formMascota!: Mascota;


  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder, private MascotaService: MascotaServiceService, private router: Router, private route:ActivatedRoute) {
    this.mascotaForm = this.fb.group({
      id: [''],  // <-- Add the ID here
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*(\.\d{0,2})?$/)]],
      enfermedad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.MascotaService.searchById(id).subscribe(
        data => {
          // Move the code that relies on 'mascota' inside this callback
          const mascota = data;
          console.log(mascota);

          console.log("Llego al mensaje");
          console.log(this.formMascota);

          this.mascotaForm.setValue({
            id: mascota.id, // Use 'mascota' data here
            nombre: mascota.nombre,
            raza: mascota.raza,
            edad: mascota.edad,
            peso: mascota.peso,
            enfermedad: mascota.enfermedad
          });
        }
      );
    });
  }




  onSubmit()
  {
    if (this.mascotaForm.valid)
    {
      // Process your form here
      console.log('Form values:', this.mascotaForm.value);
      console.log('ID de la mascota', this.mascotaForm.get("id")!.value);

      let mascota : Mascota = this.mascotaForm.value;
      this.MascotaService.update(mascota);

      console.log("Actualizar los datos");

      this.router.navigate(['/login-administrativo/dashboard-veterinarios']);
    }
  }
}
