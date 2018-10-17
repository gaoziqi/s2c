
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtComponent } from './mt.component';

describe('MtComponent', () => {
  let component: MtComponent;
  let fixture: ComponentFixture<MtComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
