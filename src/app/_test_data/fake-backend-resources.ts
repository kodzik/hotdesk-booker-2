import { Resource } from '../_models/resource';
import { User } from '../_models/user';

export const users: User[] = [{ username: 'test', password: 'test' }];

export const resources: Resource[] = [
  {
    id: 1,
    name: '1L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: { lat: 1, lng: 1 },
  },
  {
    id: 2,
    name: '2R',
    category: 'workspace',
    available: false,
    reserved: true,
    bounds: { lat: 2, lng: 2 },
  },
  {
    id: 3,
    name: '3L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: { lat: 3, lng: 3 },
  },
  {
    id: 4,
    name: '4R',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: { lat: 4, lng: 4 },
  },
  {
    id: 5,
    name: '5L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: { lat: 5, lng: 5 },
  },
  {
    id: 6,
    name: '6R',
    category: 'workspace',
    available: false,
    reserved: true,
    bounds: { lat: 6, lng: 6 },
  },
  {
    id: 7,
    name: '7L',
    category: 'workspace',
    available: true,
    reserved: true,
    bounds: { lat: 7, lng: 7 },
  },
  {
    id: 8,
    name: '8R',
    category: 'workspace',
    available: false,
    reserved: false,
    bounds: { lat: 8, lng: 8 },
  },
];
