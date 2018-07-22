import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { switchMap, map, startWith } from 'rxjs/operators';
import { Item } from '../../item.model';
import { Observable, fromEvent, of } from 'rxjs';
import { ItemRestService } from '../../item-rest.service';

@Component({
  selector: 'app-streamextremesolution-on-push',
  templateUrl: './streamextremesolution-on-push.component.html',
  styleUrls: ['./streamextremesolution-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamExtremeSolutionOnPushComponent implements OnInit {

  @ViewChild('form') form;

  items$: Observable<Item[]>;


  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public itemRestService: ItemRestService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.items$ = fromEvent(this.form.nativeElement, 'submit').pipe(
      map(() => new Item(this.itemForm.value.itemText)),
      switchMap((item: Item) => this.itemRestService.post(item)),
      startWith(() => of('start')),
      switchMap(() => this.itemRestService.get()),
    );
  }
}
