import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string = 'pageTitle'
  @Input() routes: { name: string, path: string }[] = [{ name: 'page', path: 'path' }]
  constructor() { }

  ngOnInit(): void {
  }

}
