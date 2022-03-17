import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import { TEXT_INPUT_TYPES } from '../components.const';

@Component({
  selector: 'c-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit, OnChanges {

  @Input() formControlName: string = null;

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon: string = '';

  @Output() onContentChange: EventEmitter<string> = new EventEmitter();

  private isFocused: boolean = false;

  public control: any;

  constructor(
    private formbuilder: FormBuilder,
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    if(this.controlContainer && this.formControlName){
      this.control = this.controlContainer.control.get(this.formControlName);

      console.log("CONT", this.control)

      // this.control.valueChanges.subscribe(inputText => {
      //   this.onContentChange.emit(inputText);
      // });
   }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.verifyInputType();
  }

  private verifyInputType() : void {
    if (!TEXT_INPUT_TYPES.includes(this.type))
      throw Error('This type is not supported by input component');
  }

  public setOnFocus(isFocused: boolean): void{
    console.log(isFocused)
    this.isFocused = isFocused;
  }

  public hasError(): boolean{
    // console.log('Err 2', this.form.get('input').errors)
    // return !this.form.valid && this.form.get('input').touched && !this.isFocused;
    return false;
  }

  registerOnChange(){

  }

  registerOnTouched(){

  }
  writeValue(){

  }
  setDisabledState(){

  }
}
