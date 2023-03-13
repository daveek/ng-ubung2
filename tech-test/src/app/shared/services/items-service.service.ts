import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "../models/item";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  private readonly API_URL = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API_URL);
  }
}
