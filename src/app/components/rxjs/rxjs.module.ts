import { CombinationComponent } from './combination/combination.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { NgModule } from '@angular/core';
import { RxjsComponent } from './rxjs.component';
import { RxJsRoutingModule } from './rxjs.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
    declarations: [RxjsComponent, SubjectComponent, ErrorHandlingComponent, CombinationComponent],
    imports: [RxJsRoutingModule, SharedModule]
})
export class RxjsModule { }
