import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { WindowService } from './services/window.service';

const MOBILE_WIDTH = 768;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private isMobile: boolean = false;
  
  constructor(
    private windowService: WindowService
  ){}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth < MOBILE_WIDTH)
      this.windowService.isMobile.next(true);
    else
      this.windowService.isMobile.next(false);
  }

  ngOnInit(): void {
      this.windowService.isMobile.subscribe((isMob) => {
      });
  }

  ngOnDestroy(): void {
    this.windowService.isMobile.unsubscribe();
  }

}
