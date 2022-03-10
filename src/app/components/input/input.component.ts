import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TEXT_INPUT_TYPES } from '../components.const';

@Component({
  selector: 'c-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnChanges {

  @Input() type: string = 'text';
  @Input() label: string = '';
  @Input() icon: string = '';

  @Output() onContentChange: EventEmitter<string> = new EventEmitter();

  private isFocused: boolean = false;

  public form: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.verifyInputType();
  }

  private initForm(){ 
    this.form = this.formbuilder.group({
      input: [null, Validators.required],
    });

    this.form.get('input').valueChanges.subscribe(inputText => {
      console.log('Valid and touched', this.form.valid, this.form.get('input').touched, this.isFocused)
      this.onContentChange.emit(inputText);
    })
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
    return !this.form.valid && this.form.get('input').touched && !this.isFocused;
  }
}
