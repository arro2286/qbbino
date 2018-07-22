import { of, Observable, Observer, fromEvent, Subject } from 'rxjs';
import { ItemRestService } from '../item-rest.service';
import { Item } from '../item.model';
import { Injectable } from '@angular/core';
import { map, switchMap, startWith, shareReplay } from 'rxjs/operators';

@Injectable()
export class StreamCenterSolutionService {

  actions$$ = new Subject<(item: Item) => Observable<any>>();
  items$: Observable<Item[]>;

  constructor(private itemRestService: ItemRestService) {
    this.items$ = this.actions$$.pipe(
      startWith(() => of('start')),
      switchMap((func: () => Observable<any>) => func()),
      switchMap(() => this.itemRestService.get()),
      shareReplay(1),
    );
  }

  getItems(): Observable<Item[]> {
    return this.items$;
  }

  addItem(item: Item): void {
    return this.actions$$.next(() => this.itemRestService.post(item));
  }
}
