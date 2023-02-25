import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { JobResult } from "src/app/types/http-job.interface";
import { getJobsResults } from 'src/app/Store/Selectors/jobs.selector';
import { loadJobs } from 'src/app/Store/Actions/jobs.actions';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  constructor( private store:Store){}

  jobs$!: Observable<JobResult[] | undefined>

  ngOnInit(){
    this.fetchJobs();
  }

  private fetchJobs(){
    this.store.dispatch(loadJobs());
    this.jobs$ = this.store.pipe(select(getJobsResults))
  }
}
