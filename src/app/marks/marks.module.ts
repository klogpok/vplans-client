import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarksComponent } from './marks.component';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MarksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    DragDropModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [MarksComponent],
})
export class MarksModule {}
