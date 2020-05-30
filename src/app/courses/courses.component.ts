import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = null;
  selectedCourse: any = {
      title : null
  };

  constructor( private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetCourse();
    this.courses = this.coursesService.getAll();
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

  saveCourse(course){
    if(course.id){
      this.coursesService.update(course)
    }else {
      this.coursesService.save(course)
    }
  }

}
