import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost2Page } from './newpost2.page';

describe('Newpost2Page', () => {
  let component: Newpost2Page;
  let fixture: ComponentFixture<Newpost2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
