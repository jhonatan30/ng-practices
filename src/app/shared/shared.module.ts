import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { JokeComponent } from './components/joke/joke.component';
import { NgModule } from '@angular/core';
import { ReferencesComponent } from './components/references/references.component';
import { SectionComponent } from './components/section/section.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { SimpleListComponent } from './components/simple-list/simple-list.component';

@NgModule({
  declarations: [
    JokeComponent,
    ReferencesComponent,
    SectionComponent,
    SidebarComponent,
    SimpleListComponent
  ],
  imports: [CommonModule, HighlightModule],
  exports: [
    CommonModule,
    HighlightModule,
    JokeComponent,
    ReferencesComponent,
    SectionComponent,
    SidebarComponent,
    SimpleListComponent
  ]
})
export class SharedModule { }
