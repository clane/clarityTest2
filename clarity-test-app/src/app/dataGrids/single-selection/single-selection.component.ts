import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-selection',
  templateUrl: './single-selection.component.html',
  styleUrls: ['./single-selection.component.css']
})
export class SingleSelectionComponent implements OnInit {

  constructor() { }


 users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue", pokemon:{"name":"Kabuto","number":1}},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red", pokemon:{"name":"Muk","number":2}},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green", pokemon:{"name":"Tentacool","number":3}},
    ];



  ngOnInit() {
  }

}