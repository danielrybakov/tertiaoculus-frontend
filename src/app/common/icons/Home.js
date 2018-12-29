import React from 'react'

type Props = {
    color?: string
}

const Home = (props: Props) => {
    const { color = 'black' } = props
    return (
        <svg
            width={48}
            height={34}
            viewBox="0 0 48 34"
            preserveAspectRatio="none">
            <path
                fill="none"
                stroke={color}
                d="M24 7.625l-9.5 7.125V26.5h5.75V19h7.5v7.5h5.75V14.75L24 7.625z"
            />
        </svg>
    )
}

export { Home }
