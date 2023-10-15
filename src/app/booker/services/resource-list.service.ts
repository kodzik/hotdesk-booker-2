import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from 'src/app/_models/resource';

@Injectable({
  providedIn: 'root',
})
export class ResourceListService {
  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>('/resources');
  }

  getResourceById(id: string): Observable<Resource> {
    return this.http.get<Resource>(`/resources/${id}`);
  }
}
