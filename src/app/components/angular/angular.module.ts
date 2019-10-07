import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular.routing';
import { ChangeDetectorComponent } from './change-detector/change-detector.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OptimizationComponent } from './optimization/optimization.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';

@NgModule({
  declarations: [AngularComponent, ChangeDetectorComponent, OptimizationComponent, WebWorkersComponent],
  imports: [AngularRoutingModule, SharedModule]
})
export class AngularModule { }
