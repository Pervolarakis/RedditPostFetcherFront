export interface SearchResult {
    userId: String,
    date: Date,
    keyword: String,
    posts: post[],
}

export interface post {
    selftext: String,
    author_fullname: String,
    title: String,
    subreddit_name_prefixed: String,
    downs: Number,
    thumbnail_height: Number,
    subreddit_type: String,
    ups: Number,
    permalink: String,
    thumbnail_width: Number,
    thumbnail: String,
    id: String,
    subreddit_subscribers: String,
    created_utc: Number,
    num_comments: Number
}

export interface SearchHistoryResponse {
    success: boolean,
    data: SearchResult[]
}