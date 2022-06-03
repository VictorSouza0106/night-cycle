import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ch-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent implements OnInit {

  @ViewChild('expansionPanel',{static: true}) expansionPanel: ElementRef;

  @Input() isCollapse: boolean = true;

  constructor(){
    console.log('Not Implented - Constructor');
  }

  public nativeElem: HTMLElement;

  ngOnInit(): void {
    this.nativeElem = this.expansionPanel.nativeElement;
    if (this.isCollapse)
      this.nativeElem.style.height = '0px';
    else 
      this.nativeElem.style.height = this.nativeElem.scrollHeight + 'px';
  }

  public click(): void{
    this.isCollapse ? this.expandSection() : this.colapseSection();
  }

  public colapseSection(): void{

    const sectionHeight = this.nativeElem.scrollHeight;
    const elementTransition = this.nativeElem.style.transition;

    this.nativeElem.style.transition = '';

    requestAnimationFrame(() => {
      this.nativeElem.style.height = sectionHeight + 'px';
      this.nativeElem.style.transition = elementTransition;
    });

    requestAnimationFrame(() => {
      this.nativeElem.style.height = 0 + 'px';
    });

    this.isCollapse = true;
  }

  public expandSection(): void {
    const sectionHeight = this.nativeElem.scrollHeight;
    const elementTransition = this.nativeElem.style.transition;

    this.nativeElem.style.transition = '';

    requestAnimationFrame(() => {
      this.nativeElem.style.height = 0 + 'px';
    });
    requestAnimationFrame(() => {
      this.nativeElem.style.height = sectionHeight + 'px';
      this.nativeElem.style.transition = elementTransition;
    });


    this.isCollapse = false;
}}
