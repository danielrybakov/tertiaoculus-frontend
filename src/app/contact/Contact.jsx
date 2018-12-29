import React from 'react'
import { injectIntl } from 'react-intl'
import { Layout } from 'app/common/layout'

type Props = {
    intl: any
}

const ContactComponent = (props: Props) => {
    //const { intl } = props
    return (
        <Layout>
            <div>CONTACT</div>
        </Layout>
    )
}

const Contact = injectIntl(ContactComponent)

export { Contact }
