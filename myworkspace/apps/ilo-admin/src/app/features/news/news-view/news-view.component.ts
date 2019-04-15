import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';
import { NewsViewModel } from '../news-data.model';
import { CustomGridColumns } from '@bionic/shared-component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'bionic-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {
  public data: NewsViewModel[] = [];
  public columnsList: CustomGridColumns[] = [
    {
      key: 'ID',
      width: 30,
      header: 'id',
      type: 'string',
      visible: false
    },
    {
      key: 'header',
      header: 'News header',
      type: 'string'
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
  constructor(private newsApi: NewsApiService) {}

  ngOnInit() {
    this.newsApi.getNewsList().subscribe(data => (this.data = data));
  }

  deleteNews(data: any): void {
    this.newsApi
      .deleteNews([data.ID])
      .subscribe(
        () => alert('News deleted successfully'),
        (error: HttpErrorResponse) =>
          alert('failed while attempting to delete news try again')
      );
  }
}
