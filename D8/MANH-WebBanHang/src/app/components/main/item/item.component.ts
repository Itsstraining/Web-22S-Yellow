import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../../models/item.models';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

}
