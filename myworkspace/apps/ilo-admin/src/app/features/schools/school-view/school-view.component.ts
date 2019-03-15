import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bionic-school-view',
  templateUrl: './school-view.component.html',
  styleUrls: ['./school-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SchoolViewComponent implements OnInit {
  public data: Object[] = [];
  public columnBluePrint: [] = [];
  constructor() {}

  ngOnInit() {}
}
