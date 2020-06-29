import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost13Page } from './editpost13.page';

describe('Editpost13Page', () => {
  let component: Editpost13Page;
  let fixture: ComponentFixture<Editpost13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
