import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-addgame',
    templateUrl: './addgame.component.html',
    styleUrls: ['./addgame.component.scss'],
    animations: [routerTransition()]
})
export class AddgameComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
