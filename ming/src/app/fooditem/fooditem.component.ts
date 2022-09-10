import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Result } from '../result';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})

export class FooditemComponent implements OnInit{
  @Input() itemData!: Result;
  @Output() eraseItem: EventEmitter<Result>;
  @Output() modifyItem: EventEmitter<Result>;
  fatFactor = new FormControl();

  constructor(){
    this.eraseItem = new EventEmitter();
    this.modifyItem = new EventEmitter();
 
  }
  ngOnInit(){
    this.fatFactor.setValue(this.itemData.fat_factor);
  }

  modifyClick(){
    this.itemData.fat_factor=this.fatFactor.value;
    console.log("Click Modificar",this.itemData);
    this.modifyItem.emit(this.itemData);
  };

  eraseClick(){
    console.log("Click Borrar",this.itemData);
    this.eraseItem.emit(this.itemData);
  }
}
