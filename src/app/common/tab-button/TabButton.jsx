import type { Element } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
