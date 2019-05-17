import { JsComponent } from './components/js/js.component';
import { NgModule } from '@angular/core';
import { PromisesComponent } from './components/promises/promises.component';
import { RouterModule, Routes } from '@angular/router';
import { RxjsModule } from './components/rxjs/rxjs.module';

const routes: Routes = [
    {
        path: 'rxjs',
        loadChildren: () => RxjsModule
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
})
export class AppRouting { }
