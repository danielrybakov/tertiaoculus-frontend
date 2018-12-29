import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'

type Props = {
    intl: any
}

const Posts = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <div>POSTS</div>
        </Layout>
    )
}

const PostsComponent = injectIntl(Posts)

export { PostsComponent }
