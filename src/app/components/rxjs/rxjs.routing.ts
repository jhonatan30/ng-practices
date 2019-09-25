import { CombinationComponent } from './combination/combination.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs.component';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: RxjsComponent
            },
            {
                path: '',
                outlet: 'sidebar',
                component: SidebarComponent
            }
        ]
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
        path: 'combination',
        component: CombinationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxJsRoutingModule { }
