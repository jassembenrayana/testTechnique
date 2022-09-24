import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-user-card-unique',
  templateUrl: './user-card-unique.component.html',
  styleUrls: ['./user-card-unique.component.css']
})
export class UserCardUniqueComponent implements OnInit {

  @Output() delete_User_Event = new EventEmitter<User>();
  @Output() addNombreEnfantEvent = new EventEmitter<User>();
  @Output() substractNombreEnfantEvent = new EventEmitter<User>();

  constructor() { }

  @Input() userinfo!: User;

  ngOnInit(): void {
 
  }

  deleteUser(user: User) {
    this.delete_User_Event.emit(user);
  }

  addNombreEnfant(user: User) {
    this.addNombreEnfantEvent.emit(user);
  }

  substractNombreEnfant(user: User) {
    this.substractNombreEnfantEvent.emit(user);
  }

}
