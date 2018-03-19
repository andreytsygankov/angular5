import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss'],
    animations: [routerTransition()]
})
export class GamesComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
