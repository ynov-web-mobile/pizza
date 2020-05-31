import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaEditPage } from './pizza-edit.page';

describe('PizzaEditPage', () => {
  let component: PizzaEditPage;
  let fixture: ComponentFixture<PizzaEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
