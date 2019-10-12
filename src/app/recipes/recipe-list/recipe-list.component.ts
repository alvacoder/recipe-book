import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pizza', 'how to make pepperoni pizza', 'https://assets3.thrillist.com/v1/image/2808392/size/tmg-article_default_mobile.jpg'),
    new Recipe('Shawarma', 'how to make chicken shawarma', 'https://i2.wp.com/www.foodrepublic.com/wp-content/uploads/2018/03/shawarma.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
