import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-asignar-tratamiento',
  templateUrl: './asignar-tratamiento.component.html',
  styleUrls: ['./asignar-tratamiento.component.css']
})
export class AsignarTratamientoComponent implements OnInit
{
  veterinarioId!: string | null;
  mascotaId!: string | null;

  constructor(
    private route : ActivatedRoute
  ) {}

  ngOnInit() {
    this.veterinarioId = this.route.snapshot.paramMap.get('idVeterinario');
    this.mascotaId = this.route.snapshot.paramMap.get('idMascota');
  }
}
