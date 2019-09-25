import { HighOrderFunctionsComponent } from './high-order-functions/high-order-functions.component';
import { JsComponent } from './js.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: JsComponent,
            },
            {
                path: '',
                outlet: 'sidebar',
                component: SidebarComponent
            }
        ]
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
