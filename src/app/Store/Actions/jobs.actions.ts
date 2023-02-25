import { createAction, props } from "@ngrx/store";
import { Job } from "src/app/Types/http-job.interface";

export const loadJobs = createAction('[Jobs] Load Jobs');
export const loadJobsSuccess = createAction("[Jobs] Load jobs success",
    props<{ jobs:Job }>()
);
