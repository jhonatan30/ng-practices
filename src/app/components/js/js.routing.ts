import { ComposeComponent } from './compose/compose.component';
import { CurryngComponent } from './curryng/curryng.component';
import { HighOrderFunctionsComponent } from './high-order-functions/high-order-functions.component';
import { JsComponent } from './js.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         children: [
//             {
//                 path: '',
//                 component: JsComponent,
//             },
//             {
//                 path: '',
//                 outlet: 'sidebar',
//                 component: SidebarComponent
//             }
//         ]
//     },
//     {
//         path: 'high-order-funcitions',
//         component: HighOrderFunctionsComponent
//     }
// ];

const routes: Routes = [
    {
        path: '',
        component: JsComponent,
    },
    {
        path: 'high-order-funcitions',
        component: HighOrderFunctionsComponent
    },
    {
        path: 'compose',
        component: ComposeComponent
    },
    {
        path: 'currying',
        component: CurryngComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JsRoutingModule { }
