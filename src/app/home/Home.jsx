import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'
import { Text } from 'app/common/typography'

type Props = {
    intl: any
}

const HomeComponent = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <Text>HOME</Text>
        </Layout>
    )
}

const Home = injectIntl(HomeComponent)

export { Home }
