import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { MoreStreamSolutionService } from '../morestreamsolution.service';
import { switchMap } from 'rxjs/operators';
import { Item } from '../../item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-morestreamsolution-default',
  templateUrl: './morestreamsolution-default.component.html',
  styleUrls: ['./morestreamsolution-default.component.css'],
})
export class MoreStreamSolutionDefaultComponent implements OnInit {

  items$: Observable<Item[]>;

  itemForm = new FormGroup({
    itemText: new FormControl(''),
  });

  constructor(public moreStreamSolutionService: MoreStreamSolutionService) {
    this.items$ = moreStreamSolutionService.getItems();
  }

  ngOnInit() {
  }

  submit() {
    this.items$ = this.moreStreamSolutionService.addItem(new Item(this.itemForm.value.itemText)).pipe(
      switchMap(() => this.moreStreamSolutionService.getItems())
    )
  }
}
