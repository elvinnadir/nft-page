import React from 'react'
import cn from 'clsx'
type Props = {
    children: React.ReactNode | string;
    size: "medium" | 'big';
}
const Button = ({ children, size }: Props) => {
    return (
        <button className={cn('btn-action', {
            ['btn-${size']: !!size,
        })}>
            {children}

        </button>
    )
}

export default Button
