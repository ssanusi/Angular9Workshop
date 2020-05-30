import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Learn React Fundamentals',
      description: 'Learn the fundamentals of React 16',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 3,
      title: 'Learn Vue Fundamentals',
      description: 'Learn the fundamentals of Vue 3',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 4,
      title: 'Svelte Fundamentals',
      description: 'Learn the fundamentals of Svelte',
      percentComplete: 26,
      favorite: true
    }
  ];
  selectedCourse: any = {
      title : null
  };

  constructor() { }

  ngOnInit(): void {
    this.resetCourse();
  }

  resetCourse(){
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete : 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course){
    this.selectedCourse = course;
  }

  deleteCourse(courseId){
    console.log(courseId)
  }

  cancel(){
    this.resetCourse()
  }

  saveCourse(){
    console.log()
  }

}
