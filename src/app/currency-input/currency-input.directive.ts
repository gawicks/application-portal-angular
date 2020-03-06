import { ElementRef, OnChanges, Input, Output, EventEmitter, SimpleChanges, SimpleChange, HostListener, Directive } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

export interface CurrencyOptions {
    currencyCode: string;
    fractions: boolean
  }
  
@Directive({
    selector: `[appCurrency]`
})  
export class CurrencyInputDirective implements OnChanges{
    constructor(private elementRef: ElementRef){
    }

    @Input()
    appCurrency: string;
  
    @Input()
    public options: CurrencyOptions;
  
    @Output()
    public currencyvalue: EventEmitter<number> = new EventEmitter();
  
    public currencyValue: number;
    public currencyStr: string = "";
  
    private currencyPipe = new CurrencyPipe("en-US"); //TODO: Make this configurable
  
    ngOnChanges(changes: SimpleChanges): void {
      const options: SimpleChange = changes.options;
      if(options.isFirstChange() ||
         options.currentValue.currencyCode !== options.previousValue.currencyCode ||
         options.currentValue.fractions !== options.previousValue.fractions){
          const currencyStr = this.transform(this.currencyValue, this.options.currencyCode, this.options.fractions)
          this.updateInput(currencyStr);
      }
    }
  
    @HostListener('input', ['$event.target.value'])
    public inputCurrency(input: string){
      this.currencyValue = Number(input.replace(/[^0-9.-]+/g,""));
      const currencyStr = this.transform(this.currencyValue, this.options.currencyCode, this.options.fractions);
      this.updateInput(currencyStr);
      this.currencyvalue.emit(this.currencyValue);
    }
    
    @HostListener('keydown', ['$event'])
    public restrictNumbers(event: KeyboardEvent){
      var key = event.keyCode;
      const exceptions = [8]; //Backspace 
      if (!exceptions.includes(key) && (key < 48 || key > 57)) { 
        event.preventDefault();
      }
  
    }

    public transform(value: number, currencyCode: string, fractions: boolean){
        return this.currencyPipe.transform(value,
          currencyCode, "symbol", fractions? undefined : "1.0-0");
    }

    public updateInput(value: string){
        this.elementRef.nativeElement.value = value;
    }

}