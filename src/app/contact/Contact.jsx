import React from 'react'
import { injectIntl } from 'react-intl'

type Props = {
    intl: any
}

const ContactComponent = (props: Props) => {
    const { intl } = props
    return <div>CONTACT</div>
}

const Contact = injectIntl(ContactComponent)

export { Contact }
