import React from 'react'

const Logo = () => (
    <svg width="100%" height={120} viewBox="0 0 375 190">
        <g fill="none" fillRule="evenodd">
            <path fill="#D6F1D0" fillRule="nonzero" d="M0 0h375v190H0z" />
            <text
                fill="#000"
                fontFamily="Avalon-Bold, Avalon"
                fontSize={70}
                fontWeight="bold"
                transform="translate(0 48)">
                <tspan x={77.88} y={33.99}>
                    TERTIA
                </tspan>
                <tspan x={50.09} y={80.99}>
                    OCULUS
                </tspan>
            </text>
        </g>
    </svg>
)

export { Logo }
