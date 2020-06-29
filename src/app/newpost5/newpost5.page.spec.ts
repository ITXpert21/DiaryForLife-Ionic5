import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost5Page } from './newpost5.page';

describe('Newpost5Page', () => {
  let component: Newpost5Page;
  let fixture: ComponentFixture<Newpost5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
