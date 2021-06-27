import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Repositories } from '../models/repositories';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseURLUsers = environment.apiURL + "/users?per_page=20";
  baseURLRepos = environment.apiURL + "/users/"
  baseURLIssues = environment.apiURL + "/repos/";
  //https://api.github.com/repos/mojombo/asteroids/issues

  constructor(private http: HttpClient) { }

  getUsers(id: number): Observable<User[]>{
    const url = `${this.baseURLUsers}&since=${id}`;
    return this.http.get<User[]>(url);
  }

  getRepositories(owner: string,page: number): Observable<Repositories[]>{
    const url = `${this.baseURLRepos}${owner}/repos?per_page=20&page=${page}`;
    return this.http.get<Repositories[]>(url);
  }
}