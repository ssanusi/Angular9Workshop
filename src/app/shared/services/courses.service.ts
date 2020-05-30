import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses = [
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
      percentComplete: 50,
      favorite: true
    },
    {
      id: 3,
      title: 'Learn Vue Fundamentals',
      description: 'Learn the fundamentals of Vue 3',
      percentComplete: 70,
      favorite: true
    },
    {
      id: 4,
      title: 'Svelte Fundamentals',
      description: 'Learn the fundamentals of Svelte',
      percentComplete: 90,
      favorite: true
    }
  ];
  constructor() { }

  getAll(){
     return this.courses;
  }

  getOne(courseId){

  }

  save(course){

  }

  update(course){

  }

  delete(courseId){

  }
}
