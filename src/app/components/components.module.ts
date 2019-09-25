import { GitModule } from './git/git.module';
import { HomeComponent } from './home/home.component';
import { JsModule } from './js/js.module';
import { MyInfoComponent } from './my-info/my-info.component';
import { NgModule } from '@angular/core';
import { ParadigmsModule } from './paradigms/paradigms.module';
import { PromisesModule } from './promises/promises.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [PromisesModule, RxjsModule, JsModule, ParadigmsModule, SharedModule, GitModule],
  declarations: [HomeComponent, MyInfoComponent],
})
export class ComponentsModule { }
