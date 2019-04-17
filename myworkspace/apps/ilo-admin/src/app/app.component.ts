import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bionic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ilo-admin';

  ngOnInit() {
    alert(JSON.stringify(window['__env']));
  }
}
