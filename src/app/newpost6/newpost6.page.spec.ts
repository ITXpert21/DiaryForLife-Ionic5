import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Newpost6Page } from './newpost6.page';

describe('Newpost6Page', () => {
  let component: Newpost6Page;
  let fixture: ComponentFixture<Newpost6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newpost6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Newpost6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
