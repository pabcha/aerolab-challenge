import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent {
  @Input() size = 42;
  @Input() name;

  get iconUrl() {
    return `#${this.name}`;
  }

}
