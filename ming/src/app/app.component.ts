import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatlimits } from './fatlimits';
import { Result } from './result';
import { IResult } from './i-result';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ming';
  results: Result[] = [];
  lastSearch: Fatlimits;

  constructor(public http: HttpClient){
    this.lastSearch = new Fatlimits(0,2)
  };

  newSearchValue(value:Fatlimits){
    this.results = [];
    this.lastSearch = value;
    console.log("RECIBIDO EVENTO", value);
    this.http
    .get<IResult[]>('http://localhost:8000/comidas/' + value.minFat + '-' + value.maxFat,{observe: 'body', responseType: 'json'})
    .subscribe((data: IResult[]) => {
      console.log('RECIBIENDO RESPUESTA API', data);
      for (var dat of data) {
        console.log(dat);
        console.log(this.results.push(dat));
      }
      console.log(this.results)
    });
  };
  modifyItem(itemData: Result){
    this.http.put('http://localhost:8000/comidas/'+ itemData.ndb_no + '-' + itemData.fat_factor,'',{observe: 'body', responseType: 'text'})
    .subscribe((data: string) => {
      console.log('Recibiendo respuesta API Modificacion', data);
      this.newSearchValue(this.lastSearch);
    })
  };

  eraseItem(itemData: Result){
    this.http.delete('http://localhost:8000/comidas/'+ itemData.ndb_no, {observe: 'body', responseType: 'text'})
    .subscribe((data: string) => {
      console.log('Recibiendo respuesta API Eliminacion', data);
      this.newSearchValue(this.lastSearch);
    })
  }

  addItem(itemData: Result){
    this.http.post('http://localhost:8000/comidas/'+ itemData.ndb_no + '-' + itemData.long_desc + '-' + itemData.fat_factor,'', {observe: 'body', responseType: 'text'})
    .subscribe((data: string) => {
      console.log('Recibiendo respuesta API Agregar', data);
      this.newSearchValue(this.lastSearch);
    })
  }
}
