import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost4Page } from './newpost4.page';

describe('Newpost4Page', () => {
  let component: Newpost4Page;
  let fixture: ComponentFixture<Newpost4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
