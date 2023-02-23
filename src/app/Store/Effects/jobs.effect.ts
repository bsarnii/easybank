import {Injectable} from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { HttpJobsService } from "src/app/services/http-jobs.service";
import { loadJobs, loadJobsSuccess } from "../Actions/jobs.actions";

@Injectable()
export class JobsEffect{

    loadJobs$ = createEffect(() => this.action$.pipe(
        ofType(loadJobs),
        mergeMap(() =>
         this.jobsService.getJobs().pipe(
            map((jobs) => loadJobsSuccess({jobs}))
        )
    ))
    )

    constructor(private action$: Actions, private jobsService:HttpJobsService){}
}