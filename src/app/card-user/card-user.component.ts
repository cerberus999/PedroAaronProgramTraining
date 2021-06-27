import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  notFound = false;
  lastId = 0;
  users: User[];
  
  constructor(
    private userService: WebService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  

  getUsers() {
    this.notFound = false;
     
    this.userService.getUsers(this.lastId).subscribe( 
      (usersFromTheApi: User[]) => {
      this.users = usersFromTheApi;
      console.log(this.users);
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    }
    );
  }

  nextPage() {
    this.lastId = this.users[this.users.length-1].id;
    this.getUsers();
  }

  navigateRepos(owner: string){
    this.router.navigate(["reposlist/", owner])
  }
}

