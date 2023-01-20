import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAlimentoComponent } from './grupo-alimento.component';

describe('GrupoAlimentoComponent', () => {
  let component: GrupoAlimentoComponent;
  let fixture: ComponentFixture<GrupoAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
