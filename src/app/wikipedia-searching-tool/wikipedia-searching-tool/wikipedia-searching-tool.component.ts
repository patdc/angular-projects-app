import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';

@Component({
  selector: 'app-wikipedia-searching-tool',
  templateUrl: './wikipedia-searching-tool.component.html',
  styleUrls: ['./wikipedia-searching-tool.component.scss']
})
export class WikipediaSearchingToolComponent {

  constructor(private wikipedia: WikipediaService) {}

  pages = [];
 
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(response)
    })
  }

}
