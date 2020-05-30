import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private model = 'courses'

  constructor(private http:HttpClient) { }

  private getUrl(){
      return `${BASE_URL}${this.model}`
  }

  private getUrlById(id){
    return `${this.getUrl()}/${id}`
  }

  getAll(){
     return this.http.get(this.getUrl());
  }

  getOne(courseId){
    return this.http.get(this.getUrlById(courseId))
  }

  save(course){
    return this.http.post(this.getUrl(), course)
  }

  update(course){
    return this.http.put(this.getUrlById(course.id), course)
  }

  delete(courseId){
    return this.http.delete(this.getUrlById(courseId))
  }
}
