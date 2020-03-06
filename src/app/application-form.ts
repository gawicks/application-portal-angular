import { isNullOrEmtpyString2 as isNullOrEmtpyString } from './utils';

export class ApplicationForm {
    constructor(
        public name: string = '',
        public address: string = '',
        public email: string = '',
        public telephone: string = '',
        public expectedSalary?: number 
    ){}

    public isAttributeValid(fieldName: string){
        switch(fieldName){
          case "name":
            return !isNullOrEmtpyString(this.name);
          case "address":
            return !isNullOrEmtpyString(this.address);
          case "email":
            return !isNullOrEmtpyString(this.email) &&  this.email.match(/\S+@\S+\.\S+/);
          case "telephone":
            return !isNullOrEmtpyString(this.email) &&  this.telephone.match(/\+?[0-9]{10,12}/);
          default:
              return true;
        }
      }
    
    public isValid(){
        return !Object.keys(this).some(key => !this.isAttributeValid(key));
    }
        
}
