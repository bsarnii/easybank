import { Component, OnInit } from '@angular/core';
import { Job, JobResult } from "src/app/types/http-job.interface";
import { HttpJobsService } from 'src/app/services/http-jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor(private HttpJobsService: HttpJobsService){}

  listjobs!: Array<JobResult>
  ngOnInit(){
    this.fetchJobs();
  }

  private fetchJobs(){
    this.HttpJobsService.getJobs().subscribe(data => {
      this.listjobs = data.results;
    })
  }
}
