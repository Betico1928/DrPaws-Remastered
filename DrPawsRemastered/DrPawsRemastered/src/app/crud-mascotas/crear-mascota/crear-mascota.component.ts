import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent
{
  mascotaForm: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*(\.\d{0,2})?$/)]],
      enfermedad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.mascotaForm.valid) {
      // Process your form here
      console.log(this.mascotaForm.value);
    }
  }
}
