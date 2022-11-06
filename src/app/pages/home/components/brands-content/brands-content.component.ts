import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/types/Brand';

@Component({
  selector: 'home-brands-content',
  templateUrl: './brands-content.component.html',
  styleUrls: ['./brands-content.component.scss']
})
export class BrandsContentComponent implements OnInit {
  @Input() brands: Brand[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
