import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Editpost8Page } from './editpost8.page';

describe('Editpost8Page', () => {
  let component: Editpost8Page;
  let fixture: ComponentFixture<Editpost8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Editpost8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Editpost8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
