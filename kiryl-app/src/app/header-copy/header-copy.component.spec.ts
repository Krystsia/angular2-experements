import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCopyComponent } from './header-copy.component';

describe('HeaderCopyComponent', () => {
  let component: HeaderCopyComponent;
  let fixture: ComponentFixture<HeaderCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
