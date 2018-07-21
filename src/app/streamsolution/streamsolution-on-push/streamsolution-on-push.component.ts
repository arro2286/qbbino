import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { StreamSolutionService } from '../streamsolution.service';

@Component({
  selector: 'app-streamsolution-on-push',
  templateUrl: './streamsolution-on-push.component.html',
  styleUrls: ['./streamsolution-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StreamSolutionOnPushComponent implements OnInit {

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public streamSolutionService: StreamSolutionService) {
  }

  ngOnInit() {
  }

  submit() {
    this.streamSolutionService.addItem(this.itemForm.value.itemText)
  }
}
