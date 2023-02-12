export interface Job{
    count: number,
    __CLASS__: string,
    results: Array<resultsInterface>
}

interface resultsInterface {
    location: {
        area: String[]
    },
    title: String,
    redirect_url: String,
}