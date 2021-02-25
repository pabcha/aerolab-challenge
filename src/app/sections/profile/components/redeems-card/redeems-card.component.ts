import { Component, Input } from '@angular/core';
import { Redeem } from './../../../../interfaces/Redeem';

@Component({
  selector: 'redeems-card',
  templateUrl: './redeems-card.component.html',
  styleUrls: ['./redeems-card.component.css']
})
export class RedeemsCardComponent {
  @Input() redeems: Redeem[];
}
