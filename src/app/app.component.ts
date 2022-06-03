import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { TawkService } from './services/tawk.service';
import { TranslateService } from './services/translate.service';
import { WindowService } from './services/window.service';

const MOBILE_WIDTH = 800;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isMobile: boolean = window.innerWidth < MOBILE_WIDTH ? true : false;
  public mobileMenuState: boolean = false;
  
  public isLogged: boolean = false;
  
  constructor(
    private windowService: WindowService,
    private authService: AuthService,
    private router: Router,
    private tawkService: TawkService,
    private translateService: TranslateService,
  ){

  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth < MOBILE_WIDTH)
      this.windowService.isMobile.next(true);
    else
      this.windowService.isMobile.next(false);
  }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((isAuth) => {
      this.isLogged = isAuth;

      this.tawkService.SetChatVisibility(isAuth);
    });

    this.windowService.isMobile.subscribe((isMobile) => {
      
      this.isMobile = isMobile;
    })
  }

  ngOnDestroy(): void {
    this.windowService.isMobile.unsubscribe();
  }

  public goToPage(url: string): void{
    this.router.navigateByUrl(url);
  }

  public changeLang(lang: string): void {
    this.translateService.use(lang);
  }

  public setMobileMenuState(): void {
    this.mobileMenuState = !this.mobileMenuState;
  }

}
