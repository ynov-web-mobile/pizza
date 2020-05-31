import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewPizzaPageRoutingModule } from './view-pizza-routing.module';

import { ViewPizzaPage } from './view-pizza.page';

describe('ViewPizzaPage', () => {
  let component: ViewPizzaPage;
  let fixture: ComponentFixture<ViewPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPizzaPage ],
      imports: [IonicModule.forRoot(), ViewPizzaPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
