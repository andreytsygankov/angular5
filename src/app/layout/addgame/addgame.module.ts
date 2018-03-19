import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddgameRoutingModule } from './addgame-routing.module';
import { AddgameComponent } from './addgame.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AddgameRoutingModule, PageHeaderModule],
    declarations: [AddgameComponent]
})
export class AddgameModule {}
