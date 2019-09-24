import { HighOrderFunctionsComponent } from './high-order-functions/high-order-functions.component';
import { JsComponent } from './js.component';
import { JsRoutingModule } from './js.routing';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [JsComponent, HighOrderFunctionsComponent],
    imports: [JsRoutingModule, SharedModule]
})
export class JsModule { }
