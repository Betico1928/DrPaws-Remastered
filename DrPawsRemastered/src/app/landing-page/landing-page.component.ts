import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent
{
  ngOnInit() : void
  {
    let stars: HTMLElement | null = document.getElementById('stars');
    let moon: HTMLElement | null = document.getElementById('moon');
    let mountainsBehind: HTMLElement | null = document.getElementById('mountains_behind');
    let titulo: HTMLElement | null = document.getElementById('titulo');
    let btn: HTMLElement | null = document.getElementById('btn');
    let mountainsFront: HTMLElement | null = document.getElementById('mountains_front');
    let header: HTMLElement | null = document.querySelector('header');

    let indiceActual: number = 0;

// Función para inicializar las posiciones de las diapositivas
    function inicializarDiapositivas(): void {
      const diapositivas: NodeListOf<HTMLElement> = document.querySelectorAll('.carrusel-diapositiva');
      const totalDiapositivas: number = diapositivas.length;
      const angulo: number = 360 / totalDiapositivas;

      diapositivas.forEach((diapositiva, index) => {
        diapositiva.style.transform = `rotateY(${angulo * index}deg) translateZ(300px)`;
      });
    }

    function mover(direccion: number): void {
      const contenedor: HTMLElement | null = document.querySelector('.carrusel-contenido');
      const diapositivas: NodeListOf<HTMLElement> = document.querySelectorAll('.carrusel-diapositiva');
      const totalDiapositivas: number = diapositivas.length;
      const angulo: number = 360 / totalDiapositivas;

      indiceActual += direccion;

      if (indiceActual < 0) {
        indiceActual = totalDiapositivas - 1;
      } else if (indiceActual >= totalDiapositivas) {
        indiceActual = 0;
      }

      if (contenedor) {
        contenedor.style.transform = `rotateY(${indiceActual * -angulo}deg)`;
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      inicializarDiapositivas();
    });

    window.addEventListener('scroll', function() {
      let value: number = window.scrollY;

      if (stars) stars.style.left = value * 0.25 + 'px';
      if (moon) moon.style.top = value * 1.05 + 'px';
      if (mountainsBehind) mountainsBehind.style.top += value * 0.5 + 'px';
      if (mountainsFront) mountainsFront.style.top = value * 0 + 'px';
      if (titulo) titulo.style.marginRight = value * 3 + 'px';
      if (titulo) titulo.style.marginTop = value * 1.5 + 'px';
      if (btn) btn.style.marginTop = value * 1.5 + 'px';
      if (header) header.style.top = value * 0.5 + 'px';

      let desiredHorizontalPosition: number = (window.innerWidth - (titulo ? titulo.offsetWidth : 0)) / 2;

      // Calculate the maximum margin-right value to stop horizontally
      let maxMarginRight: number = desiredHorizontalPosition + 350; // Considering initial right: -350px

      // Calculate the new margin-right value based on scroll position
      let newMarginRight: number = Math.min(maxMarginRight, value * 3.5);

      // Adjust the margin-right and top of the 'titulo' element
      if (titulo) titulo.style.marginRight = newMarginRight + 'px';
    });
  }
}

