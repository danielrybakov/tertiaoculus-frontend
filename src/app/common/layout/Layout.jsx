import type { Element } from 'react'
import React, { Fragment } from 'react'
import { Camera, Contact, Home, Logo } from 'app/common/icons'
import styled from 'styled-components'
import { colors } from 'app/common/styles'
import { TabButton } from 'app/common/tab-button'
import { withRouter } from 'react-router-dom'
import type { intlShape } from 'react-intl'
import { injectIntl } from 'react-intl'

const { green1, green2 } = colors

type Props = {
    children: Element<any>,
    location: any,
    intl: intlShape
}

const LayoutComponent = (props: Props) => {
    const { children, location, intl } = props
    const { pathname } = location

    const routeHome = intl.formatMessage({ id: 'routes.home' })
    const routePosts = intl.formatMessage({ id: 'routes.posts' })
    const routeContact = intl.formatMessage({ id: 'routes.contact' })
    console.log(pathname)
    return (
        <Fragment>
            <Header>
                <Logo />
            </Header>
            {children}
            <Footer>
                <TabButton route={routeHome}>
                    <Home color={pathname === routeHome ? 'black' : green2} />
                </TabButton>
                <TabButton route={routePosts}>
                    <Camera
                        color={pathname === routePosts ? 'black' : green2}
                    />
                </TabButton>
                <TabButton route={routeContact}>
                    <Contact
                        color={pathname === routeContact ? 'black' : green2}
                    />
                </TabButton>
            </Footer>
        </Fragment>
    )
}

const Layout = injectIntl(withRouter(LayoutComponent))

export { Layout }

const Header = styled.header`
    background-color: ${green1};
`

const Footer = styled.footer`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: ${green1};
`
