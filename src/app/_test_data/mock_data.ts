import { GeoPoint } from '@angular/fire/firestore';
import { Resource } from '../_models/resource';

export const mockResources: Resource[] = [
  {
    id: 'test_id_1',
    name: 'test_name_1',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: new GeoPoint(11, 22),
  },
  {
    id: 'test_id_2',
    name: 'test_name_2',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: new GeoPoint(33, 44),
  },
];
