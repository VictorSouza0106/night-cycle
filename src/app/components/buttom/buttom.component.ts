import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.scss']
})
export class ButtomComponent implements OnInit {

  @Input() buttonColor: string;

  constructor(
    
  ) { }

  ngOnInit(): void {
  }
}
