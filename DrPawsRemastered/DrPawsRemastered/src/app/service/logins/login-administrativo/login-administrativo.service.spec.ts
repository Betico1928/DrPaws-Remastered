import { TestBed } from '@angular/core/testing';

import { LoginAdministrativoService } from './login-administrativo.service';

describe('LoginAdministrativoService', () => {
  let service: LoginAdministrativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAdministrativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
