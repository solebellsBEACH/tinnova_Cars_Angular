import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-is-sold',
  templateUrl: './is-sold.component.html',
  styleUrls: ['./is-sold.component.scss']
})
export class IsSoldComponent implements OnInit {
  @Input() isSold: boolean = false;
  constructor() { }
  ngOnInit(): void {
    console.log(this.isSold);
  }

}
