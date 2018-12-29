import React from 'react'
import { injectIntl } from 'react-intl'

type Props = {
    intl: any
}

const HomeComponent = (props: Props) => {
    const { intl } = props
    return <div>HOME</div>
}

const Home = injectIntl(HomeComponent)

export { Home }
