import { TestBed } from '@angular/core/testing';

import { LoginVeterinarioService } from './login-veterinario.service';

describe('LoginVeterinarioService', () => {
  let service: LoginVeterinarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginVeterinarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
