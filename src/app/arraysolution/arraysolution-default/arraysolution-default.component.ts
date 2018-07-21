import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { ArraySolutionService } from '../arraysolution.service';

@Component({
  selector: 'app-arraysolution-default',
  templateUrl: './arraysolution-default.component.html',
  styleUrls: ['./arraysolution-default.component.css']
})
export class ArraySolutionDefaultComponent implements OnInit {

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
