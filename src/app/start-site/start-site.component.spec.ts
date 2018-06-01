import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartSiteComponent } from './start-site.component';

describe('StartSiteComponent', () => {
  let component: StartSiteComponent;
  let fixture: ComponentFixture<StartSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
