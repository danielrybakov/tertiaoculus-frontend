import {
    reducer as i18nReducer,
    reducer as postsReducer,
    type State as I18nState,
    type State as PostsState
} from './i18n'

export type RootState = {
    i18nState: I18nState,
    postsState: PostsState
}

const rootReducer = {
    i18nState: i18nReducer,
    postsState: postsReducer
}

export { rootReducer }
