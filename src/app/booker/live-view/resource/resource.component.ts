import { Component, Input } from '@angular/core';
import { Resource } from 'src/app/_models/resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
})
export class ResourceComponent {
  @Input() resource: Resource;
}
