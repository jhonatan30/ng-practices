import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule, HighlightModule],
  exports: [SectionComponent, CommonModule, HighlightModule]
})
export class SharedModule { }
