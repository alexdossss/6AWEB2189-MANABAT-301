import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularShareData } from './angular-share-data';

describe('AngularShareData', () => {
  let component: AngularShareData;
  let fixture: ComponentFixture<AngularShareData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularShareData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularShareData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
