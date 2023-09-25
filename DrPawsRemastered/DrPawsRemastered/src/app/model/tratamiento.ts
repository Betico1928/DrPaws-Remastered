import {Mascota} from "./mascota";
import {Medicamento} from "./medicamento";
import {Veterinario} from "./veterinario";

export interface Tratamiento
{
  id: number;  // '?' denotes that the property is optional
  veterinario?: Veterinario;  // Assuming you have a 'Veterinario' interface or model in TypeScript
  mascota?: Mascota;  // Assuming you have a 'Mascota' interface or model in TypeScript
  medicamentos?: Medicamento[];  // Assuming you have a 'Medicamento' interface in TypeScript
  nombre: string;
  fecha: string;
}
