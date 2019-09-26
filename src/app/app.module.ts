import shell from 'highlight.js/lib/languages/shell';
import typescript from 'highlight.js/lib/languages/typescript';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { HighlightModule } from 'ngx-highlightjs';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './shared/services/services.module';

export function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'shell', func: shell }
  ];
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouting,
    BrowserModule,
    CommonModule,
    ComponentsModule,
    HighlightModule.forRoot({ languages: hljsLanguages }),
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot([]),
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
