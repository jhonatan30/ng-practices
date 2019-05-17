import { NgModule } from '@angular/core';
import { PromisesComponent } from './promises.component';
import { PromisesRoutingModule } from './promises.routing';

@NgModule({
    declarations: [PromisesComponent],
    imports: [PromisesRoutingModule]
})
export class PromisesModule { }
