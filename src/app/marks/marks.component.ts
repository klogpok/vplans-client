import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, Subscription, map } from 'rxjs';
import { MarksGQL, CreateMarkInput } from 'src/generated-types';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
})
export class MarksComponent {
  columns: string[] = ['position', 'student', 'class', 'mark', 'teacher'];

  dataSource: any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;

  marks$: Observable<CreateMarkInput[]>;
  marksSubscription: Subscription;
  formSubscription: Subscription;

  searchText = '';

  form: FormGroup;

  constructor(private marksGql: MarksGQL, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();

    this.marksSubscription = this.marksGql
      .watch({
        student: '',
        class: '',
        mark: '',
        teacher: '',
      })
      .valueChanges.pipe(
        map((res) =>
          res.data.marks.map((mark, index) => ({
            ...mark,
            position: index + 1,
          }))
        )
      )
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy() {
    this.marksSubscription.unsubscribe();
    this.formSubscription.unsubscribe();
  }

  initializeForm() {
    this.form = this.fb.group({
      student: '',
      class: '',
      mark: '',
      teacher: '',
    });

    this.formSubscription = this.form.valueChanges.subscribe((value) => {
      this.searchText = value.student;

      this.marksSubscription.unsubscribe();

      this.marksSubscription = this.marksGql
        .watch({
          student: value.student,
          class: value.class,
          mark: value.mark,
          teacher: value.teacher,
        })
        .valueChanges.pipe(
          map((res) =>
            res.data.marks.map((mark, index) => ({
              ...mark,
              position: index + 1,
            }))
          )
        )
        .subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event && event.currentIndex !== 0) {
      moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
  }
}
