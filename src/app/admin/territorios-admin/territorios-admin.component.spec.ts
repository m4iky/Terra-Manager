import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerritoriosAdminComponent } from './territorios-admin.component';

describe('TerritoriosAdminComponent', () => {
  let component: TerritoriosAdminComponent;
  let fixture: ComponentFixture<TerritoriosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerritoriosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerritoriosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
