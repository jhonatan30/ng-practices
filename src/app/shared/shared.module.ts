import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule],
  exports: [SectionComponent, CommonModule]
})
export class SharedModule { }
