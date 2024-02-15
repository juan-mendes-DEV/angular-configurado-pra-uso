import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosFeitoComponent } from './projetos-feito.component';

describe('ProjetosFeitoComponent', () => {
  let component: ProjetosFeitoComponent;
  let fixture: ComponentFixture<ProjetosFeitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetosFeitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosFeitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
