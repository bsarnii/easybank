export interface Job{
    count: number,
    __CLASS__: string,
    results: Array<JobResult>
}

export interface JobResult {
    location: {
        area: String[]
    },
    title: String,
    redirect_url: String,
}