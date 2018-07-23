import { Item } from "./item.model";
import { Observable, interval } from "rxjs";
import { take, map } from "rxjs/operators";

export class ItemRestService {
  items: Item[] = [];

  get(): Observable<Item[]> {
    return interval(500).pipe(
      take(1),
      map(() => this.items.slice())
    );

  }

  post(item: Item): Observable<any> {
    return interval(250).pipe(
      take(1),
      map(() => this.items.push(item))
    );
  }
}
