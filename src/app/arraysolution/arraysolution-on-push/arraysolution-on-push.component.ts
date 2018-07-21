import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ArraySolutionService } from '../arraysolution.service';

@Component({
  selector: 'app-arraysolution-on-push',
  templateUrl: './arraysolution-on-push.component.html',
  styleUrls: ['./arraysolution-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArraySolutionOnPushComponent implements OnInit {

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public arraySolutionService: ArraySolutionService) {
  }

  ngOnInit() {
  }

  submit() {
    this.arraySolutionService.addItem(this.itemForm.value.itemText)
  }
}
