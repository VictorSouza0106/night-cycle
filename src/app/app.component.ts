import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WindowService } from './services/window.service';

const MOBILE_WIDTH = 768;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private isMobile: boolean = false;
  
  constructor(
    private windowService: WindowService,
    private router: Router,
  ){}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth < MOBILE_WIDTH)
      this.windowService.isMobile.next(true);
    else
      this.windowService.isMobile.next(false);
  }

  ngOnDestroy(): void {
    this.windowService.isMobile.unsubscribe();
  }

  public goToPage(url: string): void{
    this.router.navigateByUrl(url);
  }

}
