import { Component, OnInit } from '@angular/core';
import {me} from '../../info/about';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
me: any;
  constructor() { }

  ngOnInit() {
     this.me = me;
  }

}
