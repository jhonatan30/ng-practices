import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { NgModule } from '@angular/core';
import { ParadigmsComponent } from './paradigms.component';
import { ParadigmsRoutingModule } from './paradigms.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ParadigmsComponent, FunctionalProgrammingComponent],
  imports: [SharedModule, ParadigmsRoutingModule]
})
export class ParadigmsModule { }
