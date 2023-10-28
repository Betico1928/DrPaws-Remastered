import {Component, OnInit} from '@angular/core';
import {EstadisticasService} from "../../../service/estadisticas/estadisticas.service";
import Chart from 'chart.js/auto';

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

  ngOnInit()
  {
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
      console.log(data)
      this.crearPieDiagram()
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

  crearPieDiagram() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.medicamentosUltimoMes.map((item: any) => item[0]),
        datasets: [{
          data: this.medicamentosUltimoMes.map((item: any) => item[1]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // ... y otros colores si tienes más medicamentos
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(201, 203, 207, 1)',
            'rgba(54, 162, 235, 1)',
            // ... y otros bordes si tienes más medicamentos
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false // Ocultar las etiquetas (legend) del gráfico
          },
          tooltip: {
            callbacks: {
              title: function(tooltipItem: any) {
                return tooltipItem[0].label;
              },
              label: function(tooltipItem: any) {
                return 'Cantidad: ' + tooltipItem.formattedValue;
              }
            }
          }
        }
      }
    });
  }



}

