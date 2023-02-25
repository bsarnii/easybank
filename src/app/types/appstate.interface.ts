import { InviteStateInterface } from "./invite-state.interface";
import { Job } from "./http-job.interface";

export interface AppStateInterface {
    jobs: Job;
    invite: InviteStateInterface
}