import { GeoPoint } from '@angular/fire/firestore';
import { Resource } from '../_models/resource';

export const resources: Resource[] = [
  {
    id: '1',
    name: '5L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: new GeoPoint(11, 22),
  },
  {
    id: '2',
    name: '10R',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: new GeoPoint(22, 33),
  },
];
