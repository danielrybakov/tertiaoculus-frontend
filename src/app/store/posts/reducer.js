import type { Action } from './actions'
import { endpoints } from 'app/store/endpoints'
import { managePageAPIError } from 'app/store'

export type State = {
    posts: any, //Posts
    dataLoaded: ?boolean,
    error: ?any
}

const initialState: State = {
    posts: [],
    error: null,
    dataLoaded: false
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case 'POSTS_DATA_RESPONSE':
            return {
                ...state,
                ...action.data,
                dataLoaded: true
            }
        case 'PAGE_API_ERROR':
            return managePageAPIError(state, action, endpoints.pages.posts)
        default:
            return state
    }
}
