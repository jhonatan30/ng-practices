import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { RxJsRoutingModule } from './rxjs.routing';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
    declarations: [RxjsComponent, SubjectComponent],
    imports: [RxJsRoutingModule, CommonModule]
})
export class RxjsModule { }
