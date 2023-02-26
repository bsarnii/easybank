import { InviteStateInterface } from "./invite-state.interface";
import { Job } from "./http-job.interface";
import { Posts } from "./http-posts.interface"

export interface AppStateInterface {
    jobs: Job
    invite: InviteStateInterface
    posts: Posts
}