import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserDto } from "./user.dto";

interface UserResponse {
  data: UserDto[];
  totalPages: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?page=${page}`);
  }
}
