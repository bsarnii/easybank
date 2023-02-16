import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../types/http-posts.interface';
import { environment } from 'src/environment.ts'

@Injectable({
  providedIn: 'root'
})
export class BlogPostsService {
  private apiUrl= "https://trw-news.p.rapidapi.com/";
  private apiKey= environment.POSTS_API_KEY
  private apiHost= "trw-news.p.rapidapi.com";
  private params= {
    q: "(language:en)AND(site_country:uk)AND(text:economy banking)AND(site:warrington-worldwide.co.uk OR newscabal.co.uk)",
    ts: 1675159335000,
    size: 4,
    "rapidapi-key": this.apiKey
  }
  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-RapidAPI-Host": this.apiHost
    })
  };

  getPosts():Observable<Posts>{
    return this.http.get<Posts>(this.apiUrl,{params:this.params})
  }
}




