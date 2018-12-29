import { connect } from 'react-redux'
import { PostsComponent } from './PostsComponent'
import { fetchPosts } from 'app/store/posts'
import type { Dispatch } from 'redux'
import type { RootState } from 'app/store/reducers'

const mapStateToProps = (state: RootState) => {
    return {
        ...state.postsState
    }
}

const mapDispatchToProps = (d: Dispatch<any>) => ({
    fetchPosts: () => d(fetchPosts())
})

const Posts = connect(
    null,
    mapDispatchToProps
)(PostsComponent)

export { Posts }
