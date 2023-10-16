import {Tratamiento} from "./tratamiento";

export interface Medicamento
{
  id: number;
  nombre: string;
  precioVenta: number;
  precioCompra: number;
  unidadesDisponibles: number;
  unidadesVendidas: number;
}
