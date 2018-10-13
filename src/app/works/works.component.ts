import {Component, OnInit} from '@angular/core';
import {works} from '../../info/works';

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
    works: any[];

    constructor() {
    }

    ngOnInit() {
        this.works = works;

    }

}
