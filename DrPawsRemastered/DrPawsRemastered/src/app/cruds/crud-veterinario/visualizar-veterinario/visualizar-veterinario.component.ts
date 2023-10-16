import {Component, OnInit} from '@angular/core';
import {Veterinario} from "../../../model/veterinario";
import {ActivatedRoute} from "@angular/router";
import {VeterinarioService} from "../../../service/veterinario/veterinario.service";

@Component({
  selector: 'app-visualizar-veterinario',
  templateUrl: './visualizar-veterinario.component.html',
  styleUrls: ['./visualizar-veterinario.component.css']
})
export class VisualizarVeterinarioComponent implements OnInit
{
  searchedVeterinario? : Veterinario
  id! : number

  constructor(
    private route : ActivatedRoute,
    private veterinarioService : VeterinarioService
  ) {}

  ngOnInit()
  {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.loadVeterinario();
  }

  private loadVeterinario() : void
  {
    this.veterinarioService.getVeterinario(this.id).subscribe(
      veterinario => this.searchedVeterinario = veterinario,
      error => alert("Lo sentimos, no pudimos cargar al veterinario")
    );
  }
}
