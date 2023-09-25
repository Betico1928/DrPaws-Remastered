import { Injectable } from '@angular/core';
import {Mascota} from "../../model/mascota";

@Injectable({
  providedIn: 'root'
})

export class MascotaServiceService
{
  constructor() { }


  // Datos de prueba
  listaDeMascotas: Mascota[] =
    [
      { id: 1, nombre: 'Bella', raza: 'Papillon', edad: 13, peso: 54.2, enfermedad: 'Rabia', imagen: 'path/to/image1' },
      { id: 2, nombre: 'Charlie', raza: 'German Shepherd', edad: 10, peso: 46.9, enfermedad: 'Distemper (Moquillo canino)', imagen: 'path/to/image2' },
      { id: 3, nombre: 'Lucy', raza: 'English Springer Spaniel', edad: 5, peso: 53.0, enfermedad: 'Sarna (ácaros)', imagen: 'path/to/image3' },
      { id: 4, nombre: 'Cooper', raza: 'Yorkshire Terrier', edad: 9, peso: 20.3, enfermedad: 'Enfermedad de Lyme (Borreliosis)', imagen: 'path/to/image4' },
      { id: 5, nombre: 'Luna', raza: 'Labrador Retriever', edad: 11, peso: 4.3, enfermedad: 'Sarna (ácaros)', imagen: 'path/to/image5' },
      { id: 6, nombre: 'Buddy', raza: 'Collie', edad: 8, peso: 12.6, enfermedad: 'Enfermedad de Lyme (Borreliosis)', imagen: 'path/to/image6' },
      { id: 7, nombre: 'Daisy', raza: 'Havanese', edad: 5, peso: 48.2, enfermedad: 'Traqueobronquitis infecciosa canina (Tos de las perreras)', imagen: 'path/to/image7' },
      { id: 8, nombre: 'Rocky', raza: 'Miniature Schnauzer', edad: 1, peso: 45.4, enfermedad: 'Hepatitis infecciosa canina', imagen: 'path/to/image8' },
      { id: 9, nombre: 'Lola', raza: 'Miniature Schnauzer', edad: 5, peso: 43.6, enfermedad: 'Hepatitis infecciosa canina', imagen: 'path/to/image9' },
      { id: 10, nombre: 'Tucker', raza: 'Samoyed', edad: 6, peso: 18.5, enfermedad: 'Hepatitis infecciosa canina', imagen: 'path/to/image10' },
      { id: 11, nombre: 'Sadie', raza: 'Pembroke Welsh Corgi', edad: 3, peso: 40.1, enfermedad: 'Sarna (ácaros)', imagen: 'path/to/image11' },
      { id: 12, nombre: 'Bear', raza: 'Chow Chow', edad: 6, peso: 59.0, enfermedad: 'Sarna (ácaros)', imagen: 'path/to/image12' },
      { id: 13, nombre: 'Molly', raza: 'Labrador Retriever', edad: 10, peso: 36.4, enfermedad: 'Hepatitis infecciosa canina', imagen: 'path/to/image13' },
      { id: 14, nombre: 'Duke', raza: 'Australian Shepherd', edad: 12, peso: 32.9, enfermedad: 'Leptospirosis', imagen: 'path/to/image14' },
      { id: 15, nombre: 'Stella', raza: 'Bulldog', edad: 12, peso: 6.7, enfermedad: 'Rabia', imagen: 'path/to/image15' },
      { id: 16, nombre: 'Oliver', raza: 'Beagle', edad: 7, peso: 23.4, enfermedad: 'Rabia', imagen: 'path/to/image16' },
      { id: 17, nombre: 'Zoe', raza: 'French Bulldog', edad: 14, peso: 34.9, enfermedad: 'Rabia', imagen: 'path/to/image17' },
      { id: 18, nombre: 'Bentley', raza: 'Whippet', edad: 4, peso: 52.3, enfermedad: 'Rabia', imagen: 'path/to/image18' },
      { id: 19, nombre: 'Maggie', raza: 'Chow Chow', edad: 6, peso: 18.9, enfermedad: 'Hepatitis infecciosa canina', imagen: 'path/to/image19' },
      { id: 20, nombre: 'Zeus', raza: 'Bulldog', edad: 2, peso: 33.7, enfermedad: 'Rabia', imagen: 'path/to/image20' },
  ];


  // CRUD:
  // Create
  add(mascota: Mascota): void
  {
    this.listaDeMascotas.push(mascota);
  }


  // Read
  searchById(id: number): Mascota | undefined
  {
    return this.listaDeMascotas.find(mascota => mascota.id === id);
  }
  searchAll(): Mascota[]
  {
    return this.listaDeMascotas;
  }


  // Update
  update(mascota: Mascota): void
  {
    const index = this.listaDeMascotas.findIndex(m => m.id === mascota.id);

    if (index !== -1)
    {
      console.log('Updating mascota:', this.listaDeMascotas[index]);
      this.listaDeMascotas[index] = mascota;
    }
    else
    {
      console.log('Mascota not found for ID:', mascota.id);
    }
  }



  // Delete
  public deleteById(id: number): void
  {
    const index = this.listaDeMascotas.findIndex(mascota => mascota.id === id);
    if (index !== -1)
    {
      this.listaDeMascotas.splice(index, 1);
    }
  }
}
