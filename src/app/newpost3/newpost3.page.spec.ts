import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost3Page } from './newpost3.page';

describe('Newpost3Page', () => {
  let component: Newpost3Page;
  let fixture: ComponentFixture<Newpost3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
