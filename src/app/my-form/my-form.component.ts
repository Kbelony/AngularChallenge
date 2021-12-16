import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  loginUser(item:any){
    console.warn(item);

  }
  constructor() {

   }

  ngOnInit(): void {
  }
  onSubmit() {
    // form submitted console.log('form submitted');
  }

}
