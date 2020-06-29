import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost11Page } from './newpost11.page';

describe('Newpost11Page', () => {
  let component: Newpost11Page;
  let fixture: ComponentFixture<Newpost11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
