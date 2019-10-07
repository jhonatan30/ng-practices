import { AngularComponent } from './angular.component';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AngularRoutingModule { }
