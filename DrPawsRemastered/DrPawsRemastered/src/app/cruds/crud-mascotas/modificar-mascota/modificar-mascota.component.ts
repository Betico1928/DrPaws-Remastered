import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MascotaServiceService} from "../../../service/mascota/mascota-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Mascota} from "../../../model/mascota";

@Component({
  selector: 'app-modificar-mascota',
  templateUrl: './modificar-mascota.component.html',
  styleUrls: ['./modificar-mascota.component.css']
})

export class ModificarMascotaComponent
{
  @Input()
  formMascota!: Mascota | undefined;


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
      this.formMascota = this.MascotaService.searchById(id);

      this.mascotaForm.setValue({
        id: this.formMascota?.id,  // <-- Include the ID here
        nombre: this.formMascota?.nombre,
        raza: this.formMascota?.raza,
        edad: this.formMascota?.edad,
        peso: this.formMascota?.peso,
        enfermedad: this.formMascota?.enfermedad
      });
    });
  }



  onSubmit()
  {
    if (this.mascotaForm.valid)
    {
      // Process your form here
      console.log('Form values:', this.mascotaForm.value);

      this.MascotaService.update(this.mascotaForm.value)

      this.router.navigate(['/login-administrativo/dashboard-veterinarios']);
    }
  }
}
