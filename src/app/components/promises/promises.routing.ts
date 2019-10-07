import { NgModule } from '@angular/core';
import { PromisesComponent } from './promises.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PromisesComponent,
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PromisesRoutingModule { }
