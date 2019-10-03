import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';
import { JokeComponent } from './components/joke/joke.component';
import { ReferencesComponent } from './components/references/references.component';

@NgModule({
  declarations: [SectionComponent, SidebarComponent, JokeComponent, ReferencesComponent],
  imports: [CommonModule, HighlightModule],
  exports: [SectionComponent, CommonModule, HighlightModule, SidebarComponent, JokeComponent, ReferencesComponent]
})
export class SharedModule { }
