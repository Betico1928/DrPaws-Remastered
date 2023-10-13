import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit
{
  mascotaForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mascotaService: MascotaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.mascotaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      raza: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.pattern(/^\d*(\.\d{0,2})?$/)]],
      enfermedad: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.mascotaForm.valid) {
      this.mascotaService.createMascota(this.mascotaForm.value).subscribe(
        data => {
          alert('Mascota creada exitosamente!');
          this.router.navigate(['login-administrativo/dashboard-veterinarios']);
        },
        error => {
          alert('Ocurrió un error al crear la mascota.');
          console.error(error);
        }
      );
    }
  }
}
