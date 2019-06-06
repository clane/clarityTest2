import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClrDatagridSortOrder } from '@clr/angular';
import {ClrDatagridComparatorInterface} from "@clr/angular";

export interface Pokemon {
  number: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  creation: Date;
  color: string;
  pokemon: Pokemon;

  // Type for dynamic access to specific properties
  [key: string]: any;
}


class PokemonComparator implements ClrDatagridComparatorInterface<User> {
    compare(a: User, b: User) {
	console.log(a);
        return a.pokemon.number - b.pokemon.number;
    }
}


@Component({
  selector: 'app-custom-sorting',
  templateUrl: './custom-sorting.component.html',
  styleUrls: ['./custom-sorting.component.css']
})
export class CustomSortingComponent implements OnInit {

  constructor(private titleService: Title) { }
  pokemonComparator = new PokemonComparator();
  componentTitle = 'Data Grid - Custom Sorting';
  setTitle(newTitle: string) { this.titleService.setTitle(newTitle); }
  @ViewChild('componentHeading') elementToFocusOnInit:ElementRef;
  sortOrder:number;

  ngOnInit() {
    this.setTitle(this.componentTitle);
    this.elementToFocusOnInit.nativeElement.focus();
  }

   users = [
        {id:"1", name:"Kevin", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"blue", pokemon:{"name":"Kabuto","number":1}},
        {id:"2", name:"Jet", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"red", pokemon:{"name":"Muk","number":2}},
        {id:"3", name:"Fred", creation:"Mon Apr 22 10:00:51 PDT 2019", color:"green", pokemon:{"name":"Tentacool","number":3}},
    ];

}
