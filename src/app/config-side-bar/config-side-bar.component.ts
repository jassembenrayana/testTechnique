import { Component, Input, OnInit } from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  @Input() userSelected!: User;
  
  constructor() { }
  
  ngOnInit(): void {
  }

  

}
