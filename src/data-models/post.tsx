export default interface Listing {
    Data: ListingData
}

interface ListingData {
    post: Post
}

interface Post {
    url: string
    thumbnail: string
    title: string
}