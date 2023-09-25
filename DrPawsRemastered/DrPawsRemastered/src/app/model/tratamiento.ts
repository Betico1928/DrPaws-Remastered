import {Mascota} from "./mascota";
import {Medicamento} from "./medicamento";
import {Veterinario} from "./veterinario";

export interface Tratamiento
{
  id: number;
  veterinario?: Veterinario;
  mascota?: Mascota;
  medicamentos?: Medicamento[];
  nombre: string;
  fecha: string;
}
