import { Component, OnInit } from '@angular/core';
import { ArrayDataService } from '../arraydata.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-arraymain',
  templateUrl: './array-main.component.html',
  styleUrls: ['./array-main.component.css']
})
export class ArrayMainComponent implements OnInit {

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
