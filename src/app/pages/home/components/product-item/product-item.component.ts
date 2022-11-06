import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'home-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() href: string = 'href'
  @Input() name: string = 'name'
  @Input() color: string = 'white'
  @Input() image: string = 'https://robociencia.com.br/wp-content/uploads/2021/03/robo.png'
  @Input() price: number = 0
  @Input() year: number = 2000
  @Input() isSold: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
