import { GitComponent } from './git.component';
import { GitRoutingModule } from './git.routing';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GitComponent],
  imports: [GitRoutingModule, SharedModule]
})
export class GitModule { }
