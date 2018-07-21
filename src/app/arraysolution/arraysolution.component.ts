import { Component, OnInit } from '@angular/core';
import { ArrayDataService } from './arraydata.service';
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

  constructor(public arrayDataService: ArrayDataService) {

  }

  ngOnInit() {
  }

  submit() {
    this.arrayDataService.addItem(this.itemForm.value.itemText)
  }
}
