import { Resource } from '../booker/_models/resource';

export const mockResources: Resource[] = [
  {
    id: 'test_id_1',
    name: 'test_name_1',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: { lat: 1, lng: 1 },
  },
  {
    id: 'test_id_2',
    name: 'test_name_2',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: { lat: 2, lng: 2 },
  },
];
