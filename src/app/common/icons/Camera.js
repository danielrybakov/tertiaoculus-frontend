import React from 'react'

type Props = {
    color?: string
}

const Camera = (props: Props) => {
    const { color = 'black' } = props
    return (
        <svg
            width={48}
            height={34}
            viewBox="0 0 48 34"
            preserveAspectRatio="none">
            <g fill="none" fillRule="evenodd">
                <path stroke={color} d="M12.5 12.5h23v14h-23z" />
                <path
                    fill={color}
                    fillRule="nonzero"
                    d="M23.665 24.33a4.67 4.67 0 0 0 4.665-4.665A4.67 4.67 0 0 0 23.665 15 4.67 4.67 0 0 0 19 19.665a4.67 4.67 0 0 0 4.665 4.665zm0-8.24a3.578 3.578 0 0 1 3.574 3.575 3.578 3.578 0 0 1-3.574 3.574 3.578 3.578 0 0 1-3.574-3.574 3.578 3.578 0 0 1 3.574-3.574z"
                />
                <path
                    stroke="#000"
                    d="M21.857 8.5l-1.103 2.61h5.755l-.953-2.61h-3.7z"
                />
            </g>
        </svg>
    )
}

export { Camera }
