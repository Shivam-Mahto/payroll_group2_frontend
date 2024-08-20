import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor( private httpService : HttpService) { }

  getProfileData(id : String) : Observable<any[]> {
    // TODO api url fix
    return this.httpService.get<any[]>(`users/${id}`)
  }
 }
