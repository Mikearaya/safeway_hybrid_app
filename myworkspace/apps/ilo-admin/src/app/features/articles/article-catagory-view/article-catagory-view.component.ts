import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticlesApiService } from '../articles-api.service';
import { ArticleCatagoryViewModel } from '../articles-data.model';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-article-catagory-view',
  templateUrl: './article-catagory-view.component.html',
  styleUrls: ['./article-catagory-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCatagoryViewComponent implements OnInit {
  public data: ArticleCatagoryViewModel[] = [];
  public columnsList: CustomGridColumns[] = [
    {
      key: 'ID',
      width: 30,
      header: 'id',
      type: 'string'
    },
    {
      key: 'name',
      header: 'Contact name',
      type: 'string'
    },
    {
      key: 'totalCount',
      header: 'Conversations',
      type: 'number',
      width: 50
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
  constructor(private articleCatagoryApi: ArticlesApiService) {}

  ngOnInit() {
    this.articleCatagoryApi
      .getArticleCatagories()
      .subscribe((data: ArticleCatagoryViewModel[]) => (this.data = data));
  }

  deleteCatagory(data: any): void {
    this.articleCatagoryApi
      .deleteArticleCatagory([data.ID])
      .subscribe(() => alert('article deleted successfuly'));
  }
}
