import { NgModule } from '@angular/core';
import { PromisesComponent } from './promises.component';
import { PromisesRoutingModule } from './promises.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [PromisesComponent],
    imports: [PromisesRoutingModule, SharedModule]
})
export class PromisesModule { }
