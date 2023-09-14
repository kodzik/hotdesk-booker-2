import { Component, Input } from '@angular/core';
import { Desk } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent {
  @Input() resource: Desk;
}
