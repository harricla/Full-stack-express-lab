import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    getAllItems(): Observable<any> {
        return this.http.get("http://localhost:5000/cart-items");
    }
    constructor(private http: HttpClient) { }
}

