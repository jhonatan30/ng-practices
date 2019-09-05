import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
    {
        path: '',
        component: RxjsComponent,
    },
    {
        path: 'subject',
        component: SubjectComponent
    },
    {
        path: 'error-handling',
        component: ErrorHandlingComponent
    },
    {
        path: 'forkjoin',
        component: ForkjoinComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxJsRoutingModule { }
