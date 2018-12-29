import React from 'react'
import type { Element } from 'react'
import { Logo } from 'app/common/icons'
import styled from 'styled-components'
import { colors } from 'app/common/styles'
import {Camera, Contact, Home} from 'app/common/icons'

type Props = {
    children: Element<any>
}

const Layout = (props: Props) => {
    const { children } = props
    return (
        <div>
            <Header>
                <Logo />
            </Header>
            {children}
            <Footer>
                <Home />
                <Camera />
                <Contact />
            </Footer>
        </div>
    )
}

export { Layout }

const Header = styled.header`
    background-color: ${colors.green};
`

const Footer = styled.footer`
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: ${colors.green};
`
