import { FunctionalProgrammingComponent } from './functional-programming/functional-programming.component';
import { NgModule } from '@angular/core';
import { ParadigmsComponent } from './paradigms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ParadigmsComponent,
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
