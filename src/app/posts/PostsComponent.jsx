import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'
import {TinyText} from 'app/common/typography'


type Props = {
    intl: any
}

const Posts = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <TinyText>POSTS</TinyText>
        </Layout>
    )
}

const PostsComponent = injectIntl(Posts)

export { PostsComponent }
