import { Component, EventEmitter, Output } from '@angular/core';
import { Result } from '../result';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-fooditemadder',
  templateUrl: './fooditemadder.component.html',
  styleUrls: ['./fooditemadder.component.css']
})
export class FooditemadderComponent {
  @Output() addItem: EventEmitter<Result>;
  newItem: Result;
  adderForm = new FormGroup({
    ndb_no: new FormControl<string>(''),
    long_desc: new FormControl<string>(''),
    fat_factor: new FormControl<number>(0)
  });
  
  constructor() { 
    this.addItem = new EventEmitter();
    this.newItem = new Result('','',0);
  }

  addClick(){
    this.newItem.ndb_no = this.adderForm.value['ndb_no']!
    this.newItem.long_desc = this.adderForm.value['long_desc']!
    this.newItem.fat_factor = this.adderForm.value['fat_factor']!

    console.log('Agregando nuevo item', this.newItem)
    this.addItem.emit(this.newItem);
    }


}
