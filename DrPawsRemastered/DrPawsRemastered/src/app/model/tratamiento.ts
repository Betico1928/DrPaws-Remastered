import {Mascota} from "./mascota";
import {Medicamento} from "./medicamento";
import {Veterinario} from "./veterinario";

export interface Tratamiento
{
  id : number;
  nombre : string;
  descripcion : string;
  fechaInicio : Date;
  fechaFin : Date;
  costo : number;
  frecuencia : String;
  mascota?: Mascota;
  veterinario?: Veterinario;
  medicamentos?: Medicamento[];
}
