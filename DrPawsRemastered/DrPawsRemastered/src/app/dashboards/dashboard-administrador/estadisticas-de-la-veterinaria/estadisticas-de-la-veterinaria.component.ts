import {Component, OnInit} from '@angular/core';
import {EstadisticasService} from "../../../service/estadisticas/estadisticas.service";

@Component({
  selector: 'app-estadisticas-de-la-veterinaria',
  templateUrl: './estadisticas-de-la-veterinaria.component.html',
  styleUrls: ['./estadisticas-de-la-veterinaria.component.css']
})
export class EstadisticasDeLaVeterinariaComponent implements OnInit
{
  // Variables para almacenar la información obtenida desde el servicio
  totalMascotas!: number;
  totalMascotasActivas!: number;
  cantidadVeterinariosActivos!: number;
  cantidadVeterinariosInactivos!: number;
  tratamientosUltimoMes!: number;
  medicamentosUltimoMes!: any[];
  top3Tratamientos!: any[];
  ventasTotales!: Object;
  ganancias!: Object;

  constructor(private estadisticasService: EstadisticasService) { }

  ngOnInit() {
    // Obtener el total de mascotas
    this.estadisticasService.getTotalMascotas().subscribe(data => {
      this.totalMascotas = data;
    });

    // Obtener el total de mascotas activas
    this.estadisticasService.getTotalMascotasActivas().subscribe(data => {
      this.totalMascotasActivas = data;
    });

    // Obtener la cantidad de veterinarios activos
    this.estadisticasService.obtenerCantidadVeterinariosActivos().subscribe(data => {
      this.cantidadVeterinariosActivos = data;
    });

    // Obtener la cantidad de veterinarios inactivos
    this.estadisticasService.obtenerCantidadVeterinariosInactivos().subscribe(data => {
      this.cantidadVeterinariosInactivos = data;
    });

    // Obtener el número de tratamientos administrados en el último mes
    this.estadisticasService.countTratamientosAdminsitradosEnUltimoMes().subscribe(data => {
      this.tratamientosUltimoMes = data;
    });

    // Obtener una tabla de los medicamentos y su cantidad suministrada el último mes
    this.estadisticasService.countTratamientosPorTipoMedicamentoAdminsitradoEnUltimoMes().subscribe(data => {
      this.medicamentosUltimoMes = data;
    });

    // Obtener las tres drogas más vendidas en los tratamientos
    this.estadisticasService.findTop3Tratamientos().subscribe(data => {
      this.top3Tratamientos = data;
    });

    // Calcula las ventas totales de la veterinaria
    this.estadisticasService.computeSales().subscribe(data => {
      this.ventasTotales = data;
    });

    // Calcula las ganancias de la veterinaria
    this.estadisticasService.computeProfit().subscribe(data => {
      this.ganancias = data;
    });
  }
}

