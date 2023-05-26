import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { WikipediaSearchingToolRoutingModule } from './wikipedia-searching-tool-routing.module';
import { WikipediaSearchingToolComponent } from './wikipedia-searching-tool/wikipedia-searching-tool.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WikipediaSearchingToolComponent,
    PageListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    WikipediaSearchingToolRoutingModule,
    HttpClientModule,
    DatePipe
  ],
  exports: [WikipediaSearchingToolComponent]
})
export class WikipediaSearchingToolModule { }
