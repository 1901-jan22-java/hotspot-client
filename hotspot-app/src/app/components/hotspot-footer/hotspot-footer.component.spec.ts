import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotFooterComponent } from './hotspot-footer.component';

describe('HotspotFooterComponent', () => {
  let component: HotspotFooterComponent;
  let fixture: ComponentFixture<HotspotFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
