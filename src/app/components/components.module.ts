import { GitModule } from './git/git.module';
import { HomeComponent } from './home/home.component';
import { JsModule } from './js/js.module';
import { MyInfoModule } from './my-info/my-info.module';
import { NgModule } from '@angular/core';
import { ParadigmsModule } from './paradigms/paradigms.module';
import { PromisesModule } from './promises/promises.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { SharedModule } from '../shared/shared.module';
import { TechnologiesComponent } from './technologies/technologies.component';

@NgModule({
  imports: [PromisesModule, RxjsModule, JsModule, ParadigmsModule, SharedModule, GitModule, MyInfoModule],
  declarations: [HomeComponent, TechnologiesComponent],
})
export class ComponentsModule { }
