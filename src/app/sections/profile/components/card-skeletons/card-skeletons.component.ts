import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-card-skeletons',
  templateUrl: './card-skeletons.component.html',
  styleUrls: ['./card-skeletons.component.css']
})
export class CardSkeletonsComponent {
  @Input() aeType;
}
