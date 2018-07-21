import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { StreamSolutionService } from '../streamsolution.service';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../item.model';

@Component({
  selector: 'app-streamsolution-default',
  templateUrl: './streamsolution-default.component.html',
  styleUrls: ['./streamsolution-default.component.css'],
})
export class StreamSolutionDefaultComponent implements OnInit {

  items: Item[] = [];

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public streamSolutionService: StreamSolutionService) {
  }

  ngOnInit() {
  }

  submit() {
    this.streamSolutionService.addItem(this.itemForm.value.itemText).pipe(
      switchMap(() => this.streamSolutionService.getItems())
    )
    .subscribe((items: Item[]) => this.items = items);
  }
}
