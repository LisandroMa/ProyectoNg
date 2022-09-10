import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Fatlimits } from '../fatlimits';

@Component({
  selector: 'app-itemlimit',
  templateUrl: './itemlimit.component.html',
  styleUrls: ['./itemlimit.component.css']
})

export class ItemlimitComponent {
  @Output() submitValue: EventEmitter<Fatlimits>;
  
  constructor() {
    this.submitValue = new EventEmitter();

  };

  fatForm = new FormGroup({
    minFat: new FormControl<string>('0'),
    maxFat: new FormControl<string>('2'),
  });

  onSubmit(){
    // TODO
    console.log("SUBMITIENDO", this.fatForm);
    this.submitValue.emit(new Fatlimits(parseInt(this.fatForm.controls['minFat'].value as string),parseInt(this.fatForm.controls['maxFat'].value as string)));
  };
}

