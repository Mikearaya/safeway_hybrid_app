import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { ItemModel } from '@syncfusion/ej2-splitbuttons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bionic-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesComponent implements OnInit {
  constructor(
    private authorizationService: AuthorizationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public items: ItemModel[] = [
    {
      text: 'Article Category',
      id: 'article_catagory'
    },
    {
      text: 'Articles',
      id: 'article'
    }
  ];
  ngOnInit() {}
  articleClick($event) {
    switch ($event.item.properties.id.trim().toUpperCase()) {
      case 'ARTICLE':
        this.router.navigate(['/articles']);
        break;
      case 'ARTICLE_CATAGORY':
        this.router.navigate(['/articles/catagory']);
        break;

      default:
        break;
    }
    console.log($event.item.properties.id);
  }
  logOut() {
    this.authorizationService.logout();
  }
}
