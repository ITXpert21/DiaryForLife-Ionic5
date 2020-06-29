import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost2Page } from './editpost2.page';

describe('Editpost2Page', () => {
  let component: Editpost2Page;
  let fixture: ComponentFixture<Editpost2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
