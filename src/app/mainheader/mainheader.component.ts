import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
  'reactiveForm':FormGroup

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      name:new FormControl(null),
      profile:new FormControl(null),
      gender:new FormControl(null),
      salary:new FormControl(null),
      notes:new FormControl(null),
     
    });
  }
  onSubmit(){
    console.log("form submitted")
    console.log(this.reactiveForm)
  }

}
