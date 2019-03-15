import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesApiService } from '../articles-api.service';
import { ArticleViewModel } from '../articles-data.model';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticlesViewComponent implements OnInit {
  public data: ArticleViewModel[] = [];
  public columnsList: CustomGridColumns[] = [
    {
      key: 'ID',
      width: 50,
      header: 'Id',
      type: 'string'
    },
    {
      key: 'header',
      header: 'header',
      type: 'string'
    },
    {
      header: 'Catagory Id',
      key: 'CATAGORY_ID',
      type: 'number',
      visible: false,
      width: 100
    },
    {
      header: 'Added',
      key: 'date_added',
      type: 'date',
      format: 'yMd',
      visible: false,
      width: 100
    },
    {
      header: 'Updated',
      key: 'date_updated',
      type: 'date',
      format: 'yMd',
      visible: false,
      width: 100
    }
  ];
  constructor(private articleApi: ArticlesApiService) {}

  ngOnInit() {
    this.articleApi.getArticle().subscribe(data => (this.data = data));
  }
}
