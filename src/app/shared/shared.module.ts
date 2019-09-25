import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';
import { SidebarComponent } from '../core/sidebar/sidebar.component';

@NgModule({
  declarations: [SectionComponent, SidebarComponent],
  imports: [CommonModule, HighlightModule],
  exports: [SectionComponent, CommonModule, HighlightModule, SidebarComponent]
})
export class SharedModule { }
