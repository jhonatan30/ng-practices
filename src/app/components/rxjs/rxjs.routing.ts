import { ErrorHandlingComponent } from './error-handling/error-handling.component';
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxJsRoutingModule { }
