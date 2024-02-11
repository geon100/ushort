import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShortenServiceService {
  private ApiUrl=environment.ApiUrl
  constructor(private http:HttpClient) { }

  short(original:string){
    console.log(original)
    return this.http.post<{original:string,shortId:string}>(`${this.ApiUrl}/shorten`,{original})
  }

  redirectCall(shortUrl:string){
    return this.http.get<{original:string}>(`${this.ApiUrl}/${shortUrl}`)
  }
}
