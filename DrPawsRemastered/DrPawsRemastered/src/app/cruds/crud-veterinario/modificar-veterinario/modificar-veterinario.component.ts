import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {VeterinarioService} from "../../../service/veterinario/veterinario.service";

@Component({
  selector: 'app-modificar-veterinario',
  templateUrl: './modificar-veterinario.component.html',
  styleUrls: ['./modificar-veterinario.component.css']
})
export class ModificarVeterinarioComponent implements OnInit
{
  veterinarioForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private veterinarioService: VeterinarioService,
    private router : Router
  ) { }

  ngOnInit(): void
  {
    // Obtener el ID de la URL
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.veterinarioForm = this.fb.group({
      nombre: ['', Validators.required],
      especialidad: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loadVeterinarioData();
  }

  loadVeterinarioData(): void {
    this.veterinarioService.getVeterinario(this.id).subscribe(
      data => this.veterinarioForm.patchValue(data),
      error => console.error(error)
    );
  }

  onSubmit(): void
  {
    if (this.veterinarioForm.valid)
    {
      const idDelVeterinario = this.id

      this.veterinarioService.updateVeterinario(idDelVeterinario, this.veterinarioForm.value).subscribe(
        () => {
          alert('Veterinario actualizado exitosamente!')
          this.router.navigate(['login-administrativo/dashboard-administrador']);
        },
        error => console.error(error)
      );
    }
  }
}
