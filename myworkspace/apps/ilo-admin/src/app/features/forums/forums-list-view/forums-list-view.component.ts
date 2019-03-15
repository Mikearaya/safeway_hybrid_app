import { Component, OnInit } from '@angular/core';
import { ForumApiService } from '../forum-api.service';
import { ForumViewModel } from '../forum-data.model';
import { CustomGridColumns } from '@bionic/shared-component';

@Component({
  selector: 'bionic-forums-list-view',
  templateUrl: './forums-list-view.component.html',
  styleUrls: ['./forums-list-view.component.css']
})
export class ForumsListViewComponent implements OnInit {
  public data: ForumViewModel[];
   columnList: CustomGridColumns[] = [
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

  constructor(private forumApi: ForumApiService) {}

  ngOnInit() {

    this.forumApi.getForumList().subscribe(
      (data: ForumViewModel[]) => this.data = data
    );
  }


  deleteForum(forum: any) : void {
    this.forumApi.deleteForum([forum.ID]).subscribe(
      () => alert('Forum deleted successfuly')
    );
  }
}
