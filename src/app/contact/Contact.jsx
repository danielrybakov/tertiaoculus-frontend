import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'
import {SmallText} from 'app/common/typography'

type Props = {
    intl: any
}

const ContactComponent = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <SmallText>CONTACT</SmallText>
        </Layout>
    )
}

const Contact = injectIntl(ContactComponent)

export { Contact }
