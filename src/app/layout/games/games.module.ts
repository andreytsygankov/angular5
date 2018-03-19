import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, GamesRoutingModule, PageHeaderModule],
    declarations: [GamesComponent]
})
export class GamesModule {}
