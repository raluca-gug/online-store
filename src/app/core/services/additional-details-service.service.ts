import { Injectable } from '@angular/core';
import { AdditionalDetails } from '../models/additionalDetails';

@Injectable({
  providedIn: 'root'
})
export class AdditionalDetailsServiceService {

  constructor() { }

  add(data: AdditionalDetails){
    this.writeLocalStorage( data)
  }
  get(id: string){
    let index=-1;
    let allData= this.readLocalStorage();
    allData.forEach((element: any, i: number) => {
        if (element.id===id) index=i;
    });
    if(index<0)
      return {id: '', height: 0, weight: 0, yearOfBirth: 0  };
    else
      return allData[index];
  }

  readLocalStorage() {
    let storageData: { items?: any } = {};
    storageData.items = [];
    if (localStorage.getItem('additionalDetails')) {
      storageData.items = JSON.parse(localStorage.getItem('additionalDetails')!).items;
    }
    return storageData.items;
  }
  writeLocalStorage( data: any) {
    let edit=-1;
    let content: { items?: any } = {};
    content.items=[];
    content.items=this.readLocalStorage();
    content.items.forEach((el: any, i:number) => {
      if(el.id==data.id) edit=i;
    });
    if(edit<0) content.items.push(data);
    else content.items[edit]=data;
    localStorage.setItem('additionalDetails', JSON.stringify(content));
  }
}
