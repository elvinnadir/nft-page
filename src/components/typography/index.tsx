import React from 'react'
type Props = {
    className?: string,
    as: 'p' | "h1" | "h2" | "h3" | "h4",
    children: React.ReactNode | string
}
const Typography: React.FC = ({ className, children, as}) => {
    return React.createElement(
        as, {
        className: className
    },
        children
    )
}

export default Typography
