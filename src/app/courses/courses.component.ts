import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;

  courses = null;

  constructor( private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetCourse();
    this.loadCourses()
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
    this.coursesService.delete(courseId).subscribe(result => this.refreshCourses())
  }

  cancel(){
    this.resetCourse()
  }

  saveCourse(course){
    if(course.id){
      this.coursesService.update(course).subscribe(course => this.refreshCourses())
    }else {
      this.coursesService.save(course).subscribe(course => this.refreshCourses());
    }
  }

  loadCourses(){
    this.coursesService.getAll()
      .subscribe(courses => this.courses = courses);
  }

  refreshCourses() {
    this.resetCourse();
    this.loadCourses();
  }


}
