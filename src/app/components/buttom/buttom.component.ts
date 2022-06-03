import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ch-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

  @Input() buttonColor: string;
  @Input() label: string;
  

  ngOnInit(): void {
    console.log('Not Implemented -> OnInit');
  }
}
