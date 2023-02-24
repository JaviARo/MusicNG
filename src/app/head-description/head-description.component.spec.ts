import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDescriptionComponent } from './head-description.component';

describe('HeadDescriptionComponent', () => {
  let component: HeadDescriptionComponent;
  let fixture: ComponentFixture<HeadDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
