import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wikipedia-searching-tool',
  templateUrl: './wikipedia-searching-tool.component.html',
  styleUrls: ['./wikipedia-searching-tool.component.scss']
})
export class WikipediaSearchingToolComponent {

  constructor(private wikipedia: WikipediaService) {}

  pages: any = [];
 
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    })
  }

}
