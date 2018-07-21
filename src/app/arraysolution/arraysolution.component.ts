import { Component, OnInit } from '@angular/core';
import { ArraySolutionService } from './arraysolution.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-arraysolution',
  templateUrl: './arraysolution.component.html',
  styleUrls: ['./arraysolution.component.css']
})
export class ArraySolutionComponent implements OnInit {

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
