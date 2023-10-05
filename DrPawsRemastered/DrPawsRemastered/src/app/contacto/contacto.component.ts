import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent
{
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.animateNumbers();
  }

  animateNumbers(): void {
    const numbers = this.el.nativeElement.querySelectorAll('.num');

    numbers.forEach((number: any) => {
      const updateCount = () => {
        const target = +number.getAttribute('data-value');
        const count = +number.innerText;

        // La velocidad se calcula dividiendo el objetivo por (tiempo deseado en ms / intervalo de actualización)
        // En este caso, 5000ms (5s) / 1ms = 5000, así que la velocidad es target / 5000
        const speed = target / 5000;

        if (count < target) {
          number.innerText = Math.ceil(count + speed);
          setTimeout(updateCount, 1); // El tiempo de espera entre cada actualización es de 1 ms
        } else {
          number.innerText = target;
        }
      };

      updateCount();
    });
  }
}
