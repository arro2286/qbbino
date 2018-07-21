import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { StreamSolutionService } from '../streamsolution.service';

@Component({
  selector: 'app-streamsolution-default',
  templateUrl: './streamsolution-default.component.html',
  styleUrls: ['./streamsolution-default.component.css'],
})
export class StreamSolutionDefaultComponent implements OnInit {

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
