import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular.routing';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AngularComponent, ChangeDetectorComponent],
  imports: [AngularRoutingModule, SharedModule]
})
export class AngularModule { }
