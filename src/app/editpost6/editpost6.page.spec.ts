import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost6Page } from './editpost6.page';

describe('Editpost6Page', () => {
  let component: Editpost6Page;
  let fixture: ComponentFixture<Editpost6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
