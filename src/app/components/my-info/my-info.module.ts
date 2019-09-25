import { MyInfoComponent } from './my-info.component';
import { MyInfoRoutingModule } from './my-info.routing';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MyInfoComponent],
  imports: [MyInfoRoutingModule, SharedModule]
})
export class MyInfoModule { }
