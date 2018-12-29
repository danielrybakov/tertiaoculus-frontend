import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'

type Props = {
    intl: any
}

const HomeComponent = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <div>HOME</div>
        </Layout>
    )
}

const Home = injectIntl(HomeComponent)

export { Home }
