import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  slideLeftIn,
  slideLeftOut,
  slideRightIn,
  slideRightOut,
  slideHidden,
} = SLIDE_ANIMATIONS

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SLIDE,ZOOM]
})

export class LoginComponent implements OnInit {

  public inAnimation: boolean = false;

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
      email: [null, Validators.compose([Validators.email, Validators.required])],
      password: [null, Validators.required],
    });

    this.registerForm = this.formBuilder.group({
      username: [null, Validators.required],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      password:[null, Validators.required],
      confirmPassword:[null]
    });
  }

  private clearForms(): void{
    this.clearLoginForm();
    this.clearRegisterForm();
  }

  private clearLoginForm(): void{
    Object.keys(this.loginForm.controls).forEach((keys) => {
      this.loginForm.get(keys).markAsUntouched();
    });
    this.loginForm.reset();
  }

  private clearRegisterForm(): void {
    Object.keys(this.registerForm.controls).forEach((keys) => {
      this.registerForm.get(keys).markAsUntouched();
    });
    this.registerForm.reset();
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

  public loginUser(): void {
    this.loginForm.markAllAsTouched();

    //TODO Adicionar requisição back-end
  }

  public registerUser(): void {
    this.registerForm.markAllAsTouched();

    //TODO Adicionar requisição back-end
  }


  public change(): void{
    if (this.inAnimation) return;

    this.clearForms();
    this.inAnimation = true;

    if (this.hasAccount){
      this.goToRegister();
      this.clearLoginForm();
    } else {
      this.goToLogin();
      this.clearRegisterForm();
    }
    this.hasAccount = !this.hasAccount;
  }
}
