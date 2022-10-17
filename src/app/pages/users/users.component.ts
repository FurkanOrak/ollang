import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  appService: AppService;
  users: any = [];

  constructor(appService: AppService) { 
    this.appService = appService;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.appService.getData("/users").subscribe({
      next: (data: any) => {
        this.users = data;
      },
      error: (err: any) => {
        console.log(err, "err");
      }
    });
  }

}
