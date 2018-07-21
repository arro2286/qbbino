import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { interval, Observable, fromEvent } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { ItemDataService } from './item-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  items$: Observable<string[]>;
  @ViewChild('form') form;

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public itemDataService: ItemDataService) {
    
  }

  ngAfterViewInit() {
    this.items$ = fromEvent(this.form.nativeElement, 'submit').pipe(
      map(() => this.itemForm.value.itemText),
      switchMap(text => this.itemDataService.addItem(text))
    );
  }
}
