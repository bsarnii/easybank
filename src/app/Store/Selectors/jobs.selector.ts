import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Job } from "src/app/types/http-job.interface";
import { JobsState } from "../Reducers/jobs.reducers";

export const getJobsState = createFeatureSelector<JobsState>("jobs");

export const getJobs = createSelector(getJobsState, (state) => state.jobs);
export const getJobsCount = createSelector(getJobs, (jobs: Job | null) => jobs?.count);
export const getJobsClass = createSelector(getJobs, (jobs: Job | null) => jobs?.__CLASS__);
export const getJobsResults = createSelector(getJobs, (jobs: Job | null) => jobs?.results);
