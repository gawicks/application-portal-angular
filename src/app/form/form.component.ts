import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationForm } from '../application-form';
import { ApplicationFormService } from '../application-form.service';
import { CurrencyOptions } from '../currency-input/currency-input.directive';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public model = new ApplicationForm('Haritha', 'Dehiwala','gawicks@gmail.com','+94773736237',undefined );
  public currencyOptions: CurrencyOptions = { currencyCode: "USD", fractions: false };

  constructor(private applicationFormService: ApplicationFormService) { }

  @ViewChild(NgForm, { static : true})
  private form: NgForm;

  ngOnInit() {
  }

  public canDeactivate(){
    return this.form.valid;
  }
  public onSubmit(){
    if(this.form.valid) {
      this.applicationFormService.register(this.model);
    }
  }
  public reset(){
    this.model = new ApplicationForm();
  }


}
