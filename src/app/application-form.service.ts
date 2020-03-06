import { Injectable } from '@angular/core';
import { ApplicationForm } from './application-form';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  private model: ApplicationForm | undefined;
  constructor() {

  }
  public register(model: ApplicationForm){
     this.model = model;
  }
  public getApplicationFormModal(): ApplicationForm | undefined{
    return this.model;
  }

}
