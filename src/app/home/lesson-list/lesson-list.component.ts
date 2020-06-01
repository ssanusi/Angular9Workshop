import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  @Input() title;
  @Input() currentLesson;
  @Input() courseLessons;
  @Output() selected =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
