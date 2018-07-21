import { interval, Observable, Observer, fromEvent } from 'rxjs';
import { ItemRestService } from '../item-rest.service';
import { Item } from '../item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StreamSolutionService {

  constructor(private itemRestService: ItemRestService) {
  }

  getItems(): Observable<Item[]> {
    return this.itemRestService.get();
  }

  addItem(item: Item): Observable<any> {
    return this.itemRestService.post(item);
  }
  // addItem(item: string): Observable<string[]> {
  //   return  Observable.create((observer: Observer<string[]>) => {
  //     this.items.push(item);
  //     observer.next(this.items);
  //   });
  // }
}
