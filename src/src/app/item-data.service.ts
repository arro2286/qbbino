import { interval, Observable, Observer, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

export class ItemDataService {

  items: string[] = [];

  addItem(item: string): Observable<string[]> {
    return  Observable.create((observer: Observer<string[]>) => {
      this.items.push(item);
      observer.next(this.items);
    });
  }
}