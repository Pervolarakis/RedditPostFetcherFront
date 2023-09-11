export interface SearchResult {
    userId: string,
    date: Date,
    keyword: string,
    posts: post[],
    _id: string
}

export interface post {
    selftext: String,
    author_fullname: String,
    title: String,
    subreddit_name_prefixed: String,
    downs: number,
    thumbnail_height: number,
    subreddit_type: String,
    ups: number,
    permalink: String,
    thumbnail_width: number,
    thumbnail: String,
    id: String,
    subreddit_subscribers: String,
    created_utc: number,
    num_comments: number
}

export interface SearchHistoryResponse {
    success: boolean,
    data: SearchResult[]
}

export interface NewSearchResonse {
    success: boolean,
    data: SearchResult
}