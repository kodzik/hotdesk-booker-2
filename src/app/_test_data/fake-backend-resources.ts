import { Resource } from '../_models/resource';
import { User } from '../_models/user';

export const users: User[] = [{ username: 'asd', password: 'asd' }];

export const resources: Resource[] = [
  {
    id: '1',
    name: '5L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: { lat: 11, lng: 22 },
  },
  {
    id: '2',
    name: '10R',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: { lat: 33, lng: 44 },
  },
];
