import { CombinationComponent } from './combination/combination.component';
import { CommonModule } from '@angular/common';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { RxJsRoutingModule } from './rxjs.routing';
import { SectionComponent } from './shared/components/section/section.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
    declarations: [RxjsComponent, SubjectComponent, SectionComponent, ErrorHandlingComponent, CombinationComponent],
    imports: [RxJsRoutingModule, CommonModule]
})
export class RxjsModule { }
