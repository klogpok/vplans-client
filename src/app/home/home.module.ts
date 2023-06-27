import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MarksModule } from '../marks/marks.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MarksModule],
})
export class HomeModule {}
