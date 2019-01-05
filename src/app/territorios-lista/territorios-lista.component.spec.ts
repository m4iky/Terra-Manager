import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoriosListaComponent } from './territorios-lista.component';

describe('TerritoriosListaComponent', () => {
  let component: TerritoriosListaComponent;
  let fixture: ComponentFixture<TerritoriosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoriosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoriosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
