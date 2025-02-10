import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosCadastroComponent } from './lancamentos-cadastro.component';

describe('LancamentosCadastroaComponent', () => {
  let component: LancamentosCadastroComponent;
  let fixture: ComponentFixture<LancamentosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentosCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
