import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { WindowService } from './services/window.service';

const MOBILE_WIDTH = 768;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private isMobile: boolean = false;
  
  public isLogged: boolean = false;
  
  constructor(
    private windowService: WindowService,
    private authService: AuthService,
    private router: Router,
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
      console.log("auth", isAuth);
      
    });
  }

  ngOnDestroy(): void {
    this.windowService.isMobile.unsubscribe();
  }

  public goToPage(url: string): void{
    this.router.navigateByUrl(url);
  }

}
