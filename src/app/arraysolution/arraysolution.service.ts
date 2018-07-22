import { Item } from "../item.model";
import { Injectable } from "@angular/core";
import { ItemRestService } from "../item-rest.service";
import { map, switchMap, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class ArraySolutionService {

  items: Item[] = [];

  constructor(private itemServer: ItemRestService) {
  }

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item) {
    this.itemServer.post(item).pipe(
      switchMap(() => this.itemServer.get()),
      tap(x => console.log("added!", x)),
    ).subscribe((items: Item[]) => this.items = items);
  }

}

