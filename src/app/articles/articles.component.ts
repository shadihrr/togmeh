import { Component, OnInit } from '@angular/core';
import {articles} from '../../info/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
articles: any[];
  constructor() { }

  ngOnInit() {
    this.articles = articles;
  }

}
