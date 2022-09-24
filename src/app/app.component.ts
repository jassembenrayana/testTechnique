import {Component, OnInit} from '@angular/core';
import {User} from './entity/User';
import { ApiUsersService } from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'test-technique';
  listUsers:User[]=[];

  userSelected: any;
  isUserSelected: boolean = false;

  constructor(private userService: ApiUsersService) { 
    
  }

  ngOnInit(): void {
    //this.LoadListUsersFromJson();
  }

  selectUser(user: User) {
    //console.log(user)
    this.isUserSelected = true;
    this.userSelected = user;
  }

  LoadListUsersFromJson(){
    this.userService.getDataFromFile().subscribe(response => {
      this.listUsers = response ;
      console.log(this.listUsers)
    })
  }

  /*
  * @ToDo
  * */
  SaveListUsersInJson(){}

}
