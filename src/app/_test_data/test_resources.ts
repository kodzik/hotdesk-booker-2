import { GeoPoint } from '@angular/fire/firestore';
import { Resource } from '../_models/resource';

export const resources: Resource[] = [
  {
    available: true,
    id: 'some_id',
    name: 'some_name',
    reserved: true,
    category: 'workspace',
    bounds: new GeoPoint(123, 456),
  },
];
