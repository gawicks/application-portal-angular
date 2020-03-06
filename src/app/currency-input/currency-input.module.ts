import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyInputDirective } from './currency-input.directive';

@NgModule({
    declarations: [CurrencyInputDirective],
    imports: [CommonModule],
    exports: [CurrencyInputDirective]
})
export class CurrencyInputModule {

}