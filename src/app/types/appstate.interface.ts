import { InviteStateInterface } from "../invite/types/invite-state.interface";
import { Job } from "./http-job.interface";

export interface AppStateInterface {
    jobs: Job;
    invite: InviteStateInterface
}