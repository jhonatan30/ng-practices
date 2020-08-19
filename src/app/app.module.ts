import { SportsComponent } from './components/sports/sports.component';
import { SidebarComponent } from 'src/app/core/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServicesModule } from './shared/services/services.module';
import { SelectionCardComponent } from './shared/components/selection-card/selection-card.component';
import { PixelAvatarComponent } from './components/pixel-avatar/pixel-avatar.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, SportsComponent, SelectionCardComponent, PixelAvatarComponent],
  imports: [
    AppRouting,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot([]),
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
