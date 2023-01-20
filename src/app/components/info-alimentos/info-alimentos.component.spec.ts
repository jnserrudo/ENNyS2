import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlimentosComponent } from './info-alimentos.component';

describe('InfoAlimentosComponent', () => {
  let component: InfoAlimentosComponent;
  let fixture: ComponentFixture<InfoAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
