export class Resource {
  constructor(
    public name: string,
    public available: boolean,
    public reserved: boolean,
    public id?: string,
    public bounds?: { lat: number; lng: number },
    public category?: string
  ) {}
}
