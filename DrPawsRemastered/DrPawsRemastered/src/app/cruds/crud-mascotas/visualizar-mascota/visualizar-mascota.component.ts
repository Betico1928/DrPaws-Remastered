import {Component, Input, OnInit} from '@angular/core';
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {Mascota} from "../../../model/mascota";
import {ActivatedRoute, Router} from "@angular/router";
import {Tratamiento} from "../../../model/tratamiento";

@Component({
  selector: 'app-visualizar-mascota',
  templateUrl: './visualizar-mascota.component.html',
  styleUrls: ['./visualizar-mascota.component.css']
})
export class VisualizarMascotaComponent implements OnInit
{
  searchedMascota?: Mascota;
  id!: number;
  tratamientos: Tratamiento[] = [];


  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadMascota();
    this.loadTratamientos();
  }

  private loadMascota(): void {
    this.mascotaService.getMascota(this.id).subscribe(
      mascota => this.searchedMascota = mascota,
      error => alert("Lo sentimos, no pudimos cargar a la mascota")
    );
  }

  private loadTratamientos(): void {
    this.mascotaService.getTratamientosByMascotaId(this.id).subscribe(
      tratamientos => this.tratamientos = tratamientos,
      error => alert("Lo sentimos, no pudimos cargar los tratamientos")
    );
  }

}
