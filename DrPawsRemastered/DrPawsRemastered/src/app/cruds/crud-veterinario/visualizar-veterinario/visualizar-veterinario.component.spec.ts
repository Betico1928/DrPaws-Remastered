import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarVeterinarioComponent } from './visualizar-veterinario.component';

describe('VisualizarVeterinarioComponent', () => {
  let component: VisualizarVeterinarioComponent;
  let fixture: ComponentFixture<VisualizarVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarVeterinarioComponent]
    });
    fixture = TestBed.createComponent(VisualizarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
