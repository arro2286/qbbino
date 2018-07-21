export class ArrayDataService {

  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
