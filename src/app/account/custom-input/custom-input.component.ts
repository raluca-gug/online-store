import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => CustomInputComponent),
            multi: true     
    }  
  ],
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor {
  constructor() { }

  hide=false;
  
  value= "" ;
  onChange!: (param: any)=>void;
  onTouched!: ()=>void;

  writeValue(value: string): void {
    this.value=value ? value :'';
  }
  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched=fn;
  }
}
