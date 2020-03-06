import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormDeactivateGuard } from '../form-deactivate.guard';
import { CommonModule } from '@angular/common';
import { CurrencyInputModule } from '../currency-input/currency-input.module';
import { FormsModule } from '@angular/forms';

const formRoutes: Routes = [
    { path: '', component: FormComponent, canDeactivate: [FormDeactivateGuard]  }
]
@NgModule({
    imports: [RouterModule.forChild(formRoutes), CommonModule, CurrencyInputModule, FormsModule],
    declarations: [FormComponent],
    exports: [FormComponent]
})
export class FormModule {

}