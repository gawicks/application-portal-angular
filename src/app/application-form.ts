import { isNullOrEmtpyString2 as isNullOrEmtpyString } from './utils';

export class ApplicationForm {
    constructor(
        public name: string = '',
        public address: string = '',
        public email: string = '',
        public telephone: string = '',
        public expectedSalary?: number 
    ){}
        
}
