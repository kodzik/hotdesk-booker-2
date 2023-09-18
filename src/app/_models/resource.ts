import { GeoPoint } from '@angular/fire/firestore';

export class Resource {
  constructor(
    public id: string,
    public name: string,
    public available: boolean,
    public reserved: boolean,
    public bounds?: GeoPoint,
    public category?: string
  ) {}
}
