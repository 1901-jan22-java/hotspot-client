import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotNavbarComponent } from './hotspot-navbar.component';

describe('HotspotNavbarComponent', () => {
  let component: HotspotNavbarComponent;
  let fixture: ComponentFixture<HotspotNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
