// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://localhost:8000/api/products';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   constructor(private http: HttpClient) { }

//   all_products(): Observable<any> {
//     return this.http.get(baseUrl + '/all_products');
//   }

//   single_product(id: any): Observable<any> {
//     return this.http.get(`${baseUrl}/single_product/${id}`);
//   }

//   add_product(data: any): Observable<any> {
//     const formData: any = new FormData();

//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('image', data.image);
//     formData.append('category', data.category);
//     formData.append('stock', data.stock);

//     return this.http.post(baseUrl+'/create_product', formData);
//   }

//   edit_product(id: any, data: any): Observable<any> {
//     const formData: any = new FormData();

//     formData.append('name', data.name);
//     formData.append('description', data.description);
//     formData.append('image', data.image);
//     formData.append('category', data.category);
//     formData.append('stock', data.stock);

//     return this.http.put(`${baseUrl}/edit_product/${id}`, formData);
//   }

//   delete_product(id: any): Observable<any> {
//     return this.http.delete(`${baseUrl}/delete_product/${id}`);
//   }

// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }
  getTrending():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/trending/all/week?api_key=87dfa1c669eea853da609d4968d294be')
    .pipe(
      tap(data => data)
    )
  }
  getNowPlaying():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR&page=1')
    .pipe(
      tap(test => test)
    )
  }
}
