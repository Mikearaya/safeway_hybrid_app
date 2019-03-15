import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridViewComponent } from './data-grid-view/data-grid-view.component';
import {
  GridModule,
  AggregateService,
  SortService,
  FilterService,
  GroupService,
  EditService,
  ExcelExportService,
  ColumnChooserService,
  ColumnMenuService,
  DetailRowService,
  SearchService,
  PdfExportService,
  ReorderService,
  CommandColumnService,
  ToolbarService,
  ResizeService,
  PageService
} from '@syncfusion/ej2-angular-grids';
import { FormOptionsComponent } from './form-options/form-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, GridModule, ReactiveFormsModule],
  declarations: [DataGridViewComponent, FormOptionsComponent],
  exports: [DataGridViewComponent, FormOptionsComponent, ReactiveFormsModule],
  providers: [
    AggregateService,
    SortService,
    FilterService,
    GroupService,
    EditService,
    ExcelExportService,
    ColumnChooserService,
    ColumnMenuService,
    DetailRowService,
    SearchService,
    PdfExportService,
    ReorderService,
    CommandColumnService,
    ToolbarService,
    ResizeService,
    PageService
  ]
})
export class SharedComponentModule {}
