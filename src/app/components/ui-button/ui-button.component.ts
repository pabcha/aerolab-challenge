import { LeadingComment } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css']
})
export class UiButtonComponent {
  @Input('uiLoading') loading = false;
}
