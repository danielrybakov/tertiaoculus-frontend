import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'
import { TinyText } from 'app/common/typography'
import { styleText } from 'app/common/typography'
import styled from 'styled-components'

type Props = {
    intl: any
}

const Posts = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <TinyText>POSTS</TinyText>
            <FormattedMessage id="button.add.label">
                {(text: string) => <Button>{text}</Button>}
            </FormattedMessage>
        </Layout>
    )
}

const PostsComponent = injectIntl(Posts)

export { PostsComponent }

const Button = styled.button`
    ${styleText};
    font-weight: bold;
    border-radius: 5px;
    color: white;
    height: 35px;
    width: calc(100% - 40px);
    text-align: center;
    text-transform: uppercase;
    background-color: black;
    position: fixed;
    left: 20px;
    bottom: 60px;
    &[disabled] {
        opacity: 0.25;
    }
`
