import type { ActionAPIError } from 'app/store/actions'
import { fetchPageData } from 'app/store/actions'
import { endpoints } from 'app/store/endpoints'

type ActionPostsDataResponse = {
    type: 'POSTS_DATA_RESPONSE',
    data: Object
}

const fetchPosts = () =>
    fetchPageData(endpoints.pages.posts, 'POSTS_DATA_RESPONSE')

export { fetchPosts }

export type Action = ActionPostsDataResponse | ActionAPIError
