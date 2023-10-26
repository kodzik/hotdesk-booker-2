export class Resource {
  constructor(
    public id: number,
    public name: string,
    public available: boolean,
    public reserved: boolean,
    public bounds?: { lat: number; lng: number },
    public category?: string
  ) {}
}
