import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasDeLaVeterinariaComponent } from './estadisticas-de-la-veterinaria.component';

describe('EstadisticasDeLaVeterinariaComponent', () => {
  let component: EstadisticasDeLaVeterinariaComponent;
  let fixture: ComponentFixture<EstadisticasDeLaVeterinariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadisticasDeLaVeterinariaComponent]
    });
    fixture = TestBed.createComponent(EstadisticasDeLaVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
