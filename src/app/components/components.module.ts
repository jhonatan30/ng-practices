import { JsModule } from './js/js.module';
import { NgModule } from '@angular/core';
import { PromisesModule } from './promises/promises.module';
import { RxjsModule } from './rxjs/rxjs.module';

@NgModule({
  imports: [PromisesModule, RxjsModule, JsModule]
})
export class ComponentsModule { }
