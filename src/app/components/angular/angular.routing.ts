import { AngularComponent } from './angular.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { NgModule } from '@angular/core';
import { OptimizationComponent } from './optimization/optimization.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';

// const routes: Routes = [
//     {
//         path: '',
//         children: [
//             {
//                 path: '',
//                 component: AngularComponent,
//             },
//             {
//                 path: '',
//                 outlet: 'sidebar',
//                 component: SidebarComponent
//             }
//         ]
//     },
//     {
//         path: 'change-detector',
//         component: ChangeDetectorComponent
//     }
// ];

const routes: Routes = [
    {
        path: '',
        component: AngularComponent
    },
    {
        path: 'change-detector',
        component: ChangeDetectorComponent
    },
    {
        path: 'optimization',
        component: OptimizationComponent
    },
    {
        path: 'web-workers',
        component: WebWorkersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularRoutingModule { }
