import {Tratamiento} from "./tratamiento";

export interface Medicamento
{
  id: number;
  nombre: string;
  precio: number;
  tratamiento?: Tratamiento; // Assuming you have a 'Tratamiento' interface or model in TypeScript
}
