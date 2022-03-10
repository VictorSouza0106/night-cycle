import { Component, OnInit } from '@angular/core';
import { SLIDE_IN, SLIDE_OUT } from 'src/animations/slide.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [SLIDE_IN, SLIDE_OUT]
})
export class LoginComponent implements OnInit {

  public hasAccount: boolean = true;

  public loginSlideIn:string="left";
  public loginSlideOut: string;

  public signSlideIn:string='hidden';
  public signSlideOut: string;

  constructor() { }

  ngOnInit(): void {
  }

  public change(){
    this.hasAccount = !this.hasAccount;

    if(this.hasAccount){
      setTimeout(() => {
        this.loginSlideIn = 'left';
        this.loginSlideOut = null;
      }, 1000);

      setTimeout(() => {
        this.signSlideOut = 'left';
        this.signSlideIn = null;
      }, 200);
    }
    else {
      setTimeout(() => {
        this.loginSlideOut = 'left';
        this.loginSlideIn = null;
      }, 200);

      setTimeout(() => {
        this.signSlideIn = 'left';
        this.signSlideOut = null;
      }, 1000);
    }
    



  }

}
