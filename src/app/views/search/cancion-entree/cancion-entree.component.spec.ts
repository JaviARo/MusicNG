import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionEntreeComponent } from './cancion-entree.component';

describe('CancionEntreeComponent', () => {
  let component: CancionEntreeComponent;
  let fixture: ComponentFixture<CancionEntreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancionEntreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancionEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
