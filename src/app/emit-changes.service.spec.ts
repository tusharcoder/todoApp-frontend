/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmitChangesService } from './emit-changes.service';

describe('EmitChangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmitChangesService]
    });
  });

  it('should ...', inject([EmitChangesService], (service: EmitChangesService) => {
    expect(service).toBeTruthy();
  }));
});
