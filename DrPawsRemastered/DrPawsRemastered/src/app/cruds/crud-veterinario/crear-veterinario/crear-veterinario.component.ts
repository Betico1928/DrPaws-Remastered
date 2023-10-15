import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {VeterinarioService} from "../../../service/veterinario/veterinario.service";
import {Router} from "@angular/router";
import { ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent {
  veterinarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private veterinarioService: VeterinarioService,
    private router: Router
  ) {
    this.veterinarioForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void
  {
    if (this.veterinarioForm.valid) {
      this.veterinarioService.createVeterinario(this.veterinarioForm.value).subscribe(
        response => {
          alert('Veterinario creado!');
          this.router.navigate(['login-administrativo/dashboard-administrador']);
        },
        error => {
          alert("Error creando veterinario: " + error);
        }
      );
    }
  }
}
