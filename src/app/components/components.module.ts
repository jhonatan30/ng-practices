import { GitComponent } from './git/git.component';
import { HomeComponent } from './home/home.component';
import { JsModule } from './js/js.module';
import { NgModule } from '@angular/core';
import { ParadigmsModule } from './paradigms/paradigms.module';
import { PromisesModule } from './promises/promises.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [PromisesModule, RxjsModule, JsModule, ParadigmsModule, SharedModule],
  declarations: [HomeComponent, GitComponent],
})
export class ComponentsModule { }
