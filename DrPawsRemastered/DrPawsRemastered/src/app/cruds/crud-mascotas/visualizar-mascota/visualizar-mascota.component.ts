import {Component, Input} from '@angular/core';
import {MascotaService} from "../../../service/mascota/mascota-service.service";
import {Mascota} from "../../../model/mascota";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-mascota',
  templateUrl: './visualizar-mascota.component.html',
  styleUrls: ['./visualizar-mascota.component.css']
})
export class VisualizarMascotaComponent
{
  /*
  constructor(private MascotaService: MascotaServiceService, private route:ActivatedRoute) { }

  searchedMascota!: Mascota | undefined;

  ngOnInit() : void
  {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));

    this.searchedMascota = this.MascotaService.searchById(id);
    });
  }
  */
}
