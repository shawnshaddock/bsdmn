import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasternodeDetailComponent } from './masternode-detail.component';

describe('MasternodeDetailComponent', () => {
  let component: MasternodeDetailComponent;
  let fixture: ComponentFixture<MasternodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasternodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasternodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
