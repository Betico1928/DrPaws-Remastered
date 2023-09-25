import {Mascota} from "./mascota";

export interface Usuario
{
  id: number;
  cedula: string;
  nombre: string;
  correo: string;
  celular: string;
  contraseña: string;
  imagen: string;
  mascotas?: Mascota[];
}
