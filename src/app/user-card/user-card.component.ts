import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  providers: [ApiUsersService]
})
export class UserCardComponent implements OnInit {

  Users: User[] = [];

  @Output() selectUser = new EventEmitter<User>();

  @Input() listUsers: User[];
  
  constructor(private userService: ApiUsersService) { 
    
  }

  ngOnInit(): void {
 
  }

  LoadListUsersFromJson(){
    this.userService.getDataFromFile().subscribe(response => {
      this.listUsers = response ;
      this.Users = this.listUsers;
    })
  }


  deleteUserEvent(user: User) {
    this.Users = this.Users.filter( (element) => {
      return element !== user
    })
  }

  RemoveNb(user: User) {
    this.Users.forEach(( element) => {
      if(element == user) {
        element.nombre_enfants--
      }
    })
  }

  addNb(user: User) {
    this.Users.forEach(( element) => {
      if(element == user) {
        element.nombre_enfants++
      }
    })
  }

  onSelect(user: User) {
    this.selectUser.emit(user);
  }
}
