import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHelpComponent } from './tech-help.component';

describe('TechHelpComponent', () => {
  let component: TechHelpComponent;
  let fixture: ComponentFixture<TechHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
