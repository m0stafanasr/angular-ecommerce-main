import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/view_models/store';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
orderDate: Date;
store = new Store("mostafa", ["cairo", "giza"], "assets/profile.png");  

constructor() { 
    this.orderDate = new Date();
  }
  
  ngOnInit(): void {
  }
  
}
