import { HighOrderFunctionsComponent } from './high-order-functions/high-order-functions.component';
import { JsComponent } from './js.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: JsComponent
    },
    {
        path: 'high-order-funcitions',
        component: HighOrderFunctionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JsRoutingModule { }
