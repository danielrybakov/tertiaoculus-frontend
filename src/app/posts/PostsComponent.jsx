import React from 'react'
import { injectIntl } from 'react-intl'

type Props = {
    intl: any
}

const Posts = (props: Props) => {
    //const { intl } = props
    return <div>POSTS</div>
}

const PostsComponent = injectIntl(Posts)

export { PostsComponent }
