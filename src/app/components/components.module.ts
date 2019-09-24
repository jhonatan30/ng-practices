import { JsModule } from './js/js.module';
import { NgModule } from '@angular/core';
import { ParadigmsModule } from './paradigms/paradigms.module';
import { PromisesModule } from './promises/promises.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [PromisesModule, RxjsModule, JsModule, ParadigmsModule],
  declarations: [HomeComponent],
})
export class ComponentsModule { }
