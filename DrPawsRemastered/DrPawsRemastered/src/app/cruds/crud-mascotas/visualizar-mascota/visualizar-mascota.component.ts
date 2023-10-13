import {Component, Input, OnInit} from '@angular/core';
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {Mascota} from "../../../model/mascota";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-mascota',
  templateUrl: './visualizar-mascota.component.html',
  styleUrls: ['./visualizar-mascota.component.css']
})
export class VisualizarMascotaComponent implements OnInit
{
  searchedMascota?: Mascota;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private mascotaService: MascotaService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadMascota();
  }

  private loadMascota(): void {
    this.mascotaService.getMascota(this.id).subscribe(
      mascota => this.searchedMascota = mascota,
      error => alert("Lo sentimos, no pudimos cargar a la mascota")
    );
  }
}
