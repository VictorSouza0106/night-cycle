/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormGroupDirective, NG_VALUE_ACCESSOR} from '@angular/forms';
import { TEXT_INPUT_TYPES } from '../components.const';

@Component({
  selector: 'ch-input-text',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ],
})
export class InputTextComponent implements ControlValueAccessor, OnInit {

  @Input() formControlName: string;

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() placeholder: string = '';

  @Input() errorMessage: string;
  @Input() keepError: boolean = false;

  @Output() focus: EventEmitter<void> = new EventEmitter();
  @Output() blur: EventEmitter<void> = new EventEmitter();

  public value: string = '';

  public onChange: any = ()=> {};
  public onTouched: any = () => {};

  public disabled: boolean = false;

  private control: AbstractControl;

  constructor(
    private rootFormGroup: FormGroupDirective
  ) {}
  
  ngOnInit(): void {
    this.validateType();

    this.control = this.rootFormGroup.control.get(this.formControlName) as AbstractControl;
  }

  private validateType(): void{
    let isValidType: boolean = false;
    let availableTypes: string = '|';
    
    TEXT_INPUT_TYPES.find((type: string) => {
      availableTypes += ` ${type} |`;

      if (type === this.type)
        isValidType = true;
    });

    //TODO TRADUZIR ERRO
    if (!isValidType)
      throw new Error(`This type is not valid. Try these types -> ${availableTypes}`);
  }

  private setDefaultErrorMessages(error: string): void {
    //TODO Translate Returns
    switch (error) {
      case 'required':
        this.errorMessage = 'Este Campo é obrigatorio';
        break;
        
      case 'email':
        this.errorMessage = 'Este Email é invalido';
        break;
    
      default:
        this.errorMessage = 'Este campo é invalido';
    }
  }

  public writeValue(value: string): void{
    this.value = value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }
 
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
 }

  public setDisabledState(isDisable: boolean): void{
    this.disabled = isDisable;
  }

  public changeValue(): void{
    this.onChange(this.value);
  }

  public isFieldValid(): boolean {

    let hasError: boolean = false;
    
    if (!this.control?.errors) return false;

    Object.keys(this.control.errors).forEach(error => {
      this.setDefaultErrorMessages(error);
      hasError = true;
    });

    return hasError && this.control.touched;
  }

  public onBlur(): void {
    this.blur.emit();
  }

  public onFocus(): void{
    if(!this.keepError)
      this.control.markAsUntouched();
    this.focus.emit();
  }

  public inputFocus(): void{
    document.getElementById('text-input').focus();
  }
}
