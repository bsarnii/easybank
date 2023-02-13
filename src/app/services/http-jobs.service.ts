import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../types/http-job.interface';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class HttpJobsService {
  private apiUrl = "https://api.adzuna.com/v1/api/jobs/de/search/1";
  private params = 
    {
      "app_id": "5285e84f",
      "app_key": "b9866df9252fa5ee21daa43fee05810f",
      "results_per_page": 9,
      "title_only": "software",
      "where": 99423,
      "distance": 30
    }

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",

    })
  };

  getJobs() :Observable<Job> {
    return this.http.get<Job>(this.apiUrl,{params:this.params});
  }

}