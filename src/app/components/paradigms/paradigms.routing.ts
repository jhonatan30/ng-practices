import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { NgModule } from '@angular/core';
import { ParadigmsComponent } from './paradigms.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ParadigmsComponent
            },
            {
                path: '',
                outlet: 'sidebar',
                component: SidebarComponent
            }

        ]
    },
    {
        path: 'functional-programming',
        component: FunctionalProgrammingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParadigmsRoutingModule { }
