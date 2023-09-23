import { GeoPoint } from '@angular/fire/firestore';

export class Resource {
  constructor(
    public name: string,
    public available: boolean,
    public reserved: boolean,
    public id?: string,
    public bounds?: GeoPoint,
    public category?: string
  ) {}
}
