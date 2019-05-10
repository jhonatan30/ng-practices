import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    NoopAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
