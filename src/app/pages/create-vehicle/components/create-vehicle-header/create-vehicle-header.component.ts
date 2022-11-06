import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vehicle-header',
  templateUrl: './create-vehicle-header.component.html',
  styleUrls: ['./create-vehicle-header.component.scss']
})
export class CreateVehicleHeaderComponent implements OnInit {
  @Input() pageTitle: string = 'pageTitle'
  @Input() routes: { name: string, path: string }[] = [{ name: 'page', path: 'path' }]
  constructor() { }

  ngOnInit(): void {
  }

}
