import type { Element } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    route: string,
    children: Element<any>
}

const TabButton = (props: Props) => {
    const { route, children } = props
    return (
        <NavLink exact to={route}>
            {children}
        </NavLink>
    )
}

export { TabButton }

const StyledNavLink = styled(NavLink)`
    &.active {
    }
`
