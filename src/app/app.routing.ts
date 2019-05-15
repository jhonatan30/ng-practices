import { JsComponent } from './components/js/js.component';
import { NgModule } from '@angular/core';
import { PromisesComponent } from './components/promises/promises.component';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'rxjs',
        pathMatch: 'full',
    },
    {
        path: 'rxjs',
        component: RxjsComponent
    },
    {
        path: 'promises',
        component: PromisesComponent
    },
    {
        path: 'javascript',
        component: JsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRouting { }
