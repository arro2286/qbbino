import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { StreamSolutionService } from '../streamsolution.service';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../item.model';

@Component({
  selector: 'app-streamsolution-on-push',
  templateUrl: './streamsolution-on-push.component.html',
  styleUrls: ['./streamsolution-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamSolutionOnPushComponent implements OnInit {

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
