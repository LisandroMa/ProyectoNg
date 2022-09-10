import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent {
  @Input() resultList!: Result[];
  @Output() eraseItem: EventEmitter<Result>;
  @Output() modifyItem: EventEmitter<Result>;
  @Output() addItem: EventEmitter<Result>;

  constructor() {
    this.eraseItem = new EventEmitter();
    this.modifyItem = new EventEmitter();
    this.addItem = new EventEmitter();
  }

  modifyItemI(itemData: Result){
    console.log("Lista Recibio Modificacion",itemData)
    this.modifyItem.emit(itemData);
  }
  eraseItemI(itemData: Result){
    console.log("Lista Recibio Borrado",itemData)
    this.eraseItem.emit(itemData)
  }
  addItemI(itemData: Result){
    console.log("Lista Recibio Agregado",itemData)
    this.addItem.emit(itemData)
  }

}
