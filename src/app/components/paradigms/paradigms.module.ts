import { NgModule } from '@angular/core';
import { ParadigmsComponent } from './paradigms.component';
import { ParadigmsRoutingModule } from './paradigms.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [ParadigmsComponent, FunctionalProgrammingComponent],
  imports: [SharedModule, ParadigmsRoutingModule, HighlightModule]
})
export class ParadigmsModule { }
