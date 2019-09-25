import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { GitComponent } from './git.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GitComponent,
            },
            {
                path: '',
                outlet: 'sidebar',
                component: SidebarComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GitRoutingModule { }
