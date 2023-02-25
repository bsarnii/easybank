import { createReducer, on } from "@ngrx/store"
import { Job } from "../../Types/http-job.interface"
import { loadJobsSuccess } from "../Actions/jobs.actions";

export interface JobsState{
    jobs: Job | null;
}

export const initialState: JobsState = {
    jobs: null
}

export const jobsReducer = createReducer(initialState,
     on(loadJobsSuccess,(state,{jobs}) => ({...state, jobs})),
     );