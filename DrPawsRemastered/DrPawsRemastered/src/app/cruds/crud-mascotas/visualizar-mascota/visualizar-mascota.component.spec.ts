import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarMascotaComponent } from './visualizar-mascota.component';

describe('VisualizarMascotaComponent', () => {
  let component: VisualizarMascotaComponent;
  let fixture: ComponentFixture<VisualizarMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarMascotaComponent]
    });
    fixture = TestBed.createComponent(VisualizarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
