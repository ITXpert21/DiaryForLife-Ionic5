import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost9Page } from './newpost9.page';

describe('Newpost9Page', () => {
  let component: Newpost9Page;
  let fixture: ComponentFixture<Newpost9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
