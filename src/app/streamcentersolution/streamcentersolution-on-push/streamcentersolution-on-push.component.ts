import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { StreamCenterSolutionService } from '../streamcentersolution.service';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-streamcentersolution-on-push',
  templateUrl: './streamcentersolution-on-push.component.html',
  styleUrls: ['./streamcentersolution-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamCenterSolutionOnPushComponent implements OnInit {

  items$: Observable<Item[]>;

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public streamCenterSolutionService: StreamCenterSolutionService) {
    this.items$ = streamCenterSolutionService.getItems();
  }

  ngOnInit() {
  }

  submit() {
    this.streamCenterSolutionService.addItem(this.itemForm.value.itemText);
  }
}
