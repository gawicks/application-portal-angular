import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CurrencyOptions } from './currency-input.directive';
import { CurrencyInputModule } from './currency-input.module';

describe('CurrencyInputDirective', () => {
  let component: CurrencyTestComponent;
  let fixture: ComponentFixture<CurrencyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyTestComponent ],
      imports: [CurrencyInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTestComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ignore non-numberic characters', () => {
    component.currencyOptions = {currencyCode : "USD" , fractions: true}; 
    setInput("ABc55aa55");
    expect(getInput()).toBe("$5,555.00");
  });

  it('should group digits - single group', () => {
    component.currencyOptions = {currencyCode : "USD" , fractions: true}; 
    setInput("5555");
    expect(getInput()).toBe("$5,555.00");
  });

  it('should group digits - multiple groups', () => {
    component.currencyOptions = {currencyCode : "USD" , fractions: true}; 
    setInput("9999999");
    expect(getInput()).toBe("$9,999,999.00");
  });

  it('should format with custom currency symbol', () => {
    component.currencyOptions = {currencyCode : "LKR" , fractions: true}; 
    setInput("5555");
    expect(getInput()).toBe("LKR5,555.00");
  });

  it('should format without fractions', () => {
    component.currencyOptions = {currencyCode : "USD" , fractions: false}; 
    setInput("5555");
    expect(getInput()).toBe("$5,555");
  });



  function setInput(value: string){
    let field: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    field.value = value;
    field.dispatchEvent(new Event('input'));
  }
  function getInput(){
    let value: string = fixture.debugElement.query(By.css('input')).nativeElement.value;
    return value;
  }

});

@Component({
  selector: "app-test-currency",
  template: "<input appCurrency [options]=currencyOptions/>"
})
class CurrencyTestComponent {
  public currencyOptions: CurrencyOptions = { currencyCode: "USD", fractions: true };
}