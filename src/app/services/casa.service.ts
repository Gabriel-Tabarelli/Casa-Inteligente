import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  constructor() { }

  setCasa(index : number): void{
    if(index == 1){
      localStorage.setItem('casa', '1');
    } else if(index == 2){
      localStorage.setItem('casa', '2');
    } else if(index == 3){
      localStorage.setItem('casa', '3');
    }
  }

  // getCasa(): any{
  //   return JSON.parse(localStorage.getItem('casa'));
  // }
}
