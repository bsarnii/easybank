export interface Posts {
    response:{
        data: Array<Post>
    }
}

export interface Post {
    author: String,
    text: String,
    title: String,
    url: String
}