import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadComponent } from './home-head.component';

describe('HomeHeadComponent', () => {
  let component: HomeHeadComponent;
  let fixture: ComponentFixture<HomeHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
