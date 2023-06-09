import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {


  @Input() pages = [];
  urlPrefix = 'https://en.wikipedia.org/?curid='

  constructor() { }

  ngOnInit(): void {
  }

}
