import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { RxJsRoutingModule } from './rxjs.routing';
import { SubjectComponent } from './subject/subject.component';
import { SectionComponent } from './shared/components/section/section.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';

@NgModule({
    declarations: [RxjsComponent, SubjectComponent, SectionComponent, ErrorHandlingComponent, ForkjoinComponent],
    imports: [RxJsRoutingModule, CommonModule]
})
export class RxjsModule { }
