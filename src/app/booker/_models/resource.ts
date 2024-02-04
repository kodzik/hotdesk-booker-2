export class Resource {
  constructor(
    public id: number,
    public name: string,
    public available: boolean,
    public reserved: boolean,
    public category: string,
    public bounds?: { lat: number; lng: number }
  ) {}
}
