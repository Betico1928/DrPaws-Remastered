import {Tratamiento} from "./tratamiento";

export interface Medicamento
{
  id: number;
  nombre: string;
  precio: number;
  tratamiento?: Tratamiento;
}
