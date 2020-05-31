import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PizzaAddPage } from './pizza-add.page';

describe('PizzaAddPage', () => {
  let component: PizzaAddPage;
  let fixture: ComponentFixture<PizzaAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
