import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SLIDE, SLIDE_ANIMATIONS } from 'src/animations/slide.animation';
import { ZOOM, ZOOM_ANIMATIONS } from 'src/animations/zoom.animation';

const {
  zoomDecreaseIn,
  zoomDecreaseOut,
  zoomIncreaseIn,
  zoomIncreaseOut,
  zoomHidden,
} = ZOOM_ANIMATIONS;

const {
  slideDownIn,
  slideDownOut,
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
  slideUpIn,
  slideUpOut,
  slideHidden,
} = SLIDE_ANIMATIONS

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SLIDE,ZOOM]
})

export class LoginComponent implements OnInit {

  public loginBackgroundState: string = slideRightIn;
  public loginCellState: string = zoomIncreaseIn;
  public loginPersonState: string = slideLeftIn;

  public registerBackgroundState: string = slideHidden;
  public registerPaperState: string = zoomHidden;
  public registerPersonState: string = slideHidden;

  public hasAccount: boolean = true;

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initForms();
  }

  private initForms(): void{
    this.loginForm = this.formBuilder.group({
      email: null,
      password: [null],
    });
    console.log('LoginFr', this.loginForm)
    this.registerForm = this.formBuilder.group({

    })
  };

  private clearLoginForm(): void{

  };

  private clearRegisterForm(): void {

  }

  private goToLogin(): void {
    setTimeout(() => {
      this.loginBackgroundState = slideRightIn;
      this.loginCellState = zoomIncreaseIn;
      this.loginPersonState = slideLeftIn;
    }, 750);

    setTimeout(() => {
      this.registerBackgroundState = slideLeftOut;
      this.registerPaperState = zoomDecreaseOut;
      this.registerPersonState = slideLeftOut;
    }, 200);
  }

  private goToRegister(): void{
    setTimeout(() => {
      this.loginBackgroundState = slideRightOut;
      this.loginCellState = zoomIncreaseOut;
      this.loginPersonState = slideLeftOut;
    }, 200);

    setTimeout(() => {
      this.registerBackgroundState = slideLeftIn;
      this.registerPaperState = zoomDecreaseIn;
      this.registerPersonState = slideLeftIn;
    }, 750);
  }


  public change(): void{
    this.hasAccount ? this.goToRegister() : this.goToLogin();
    this.hasAccount = !this.hasAccount;

    console.log('FORM', this.loginForm.get('email').value)
  }
}
