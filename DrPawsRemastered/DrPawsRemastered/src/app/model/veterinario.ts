import {Mascota} from "./mascota";

export interface Veterinario
{
  id: number;
  especialidad: string;
  nombre: string;
  email: string;
  password: string;
  imagen: string;
  mascotas?: Mascota[];
}
