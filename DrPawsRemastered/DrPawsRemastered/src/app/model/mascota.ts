import {Veterinario} from "./veterinario";
import {Usuario} from "./usuario";

export interface Mascota
{
  id?: number;
  nombre: string;
  raza: string;
  edad: number;
  peso: number;
  enfermedad: string;
  imagen: string;
  usuario?: Usuario;
  veterinarios?: Veterinario[];
}


