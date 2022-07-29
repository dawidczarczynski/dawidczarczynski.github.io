import * as React from 'react'
import * as styles from './wrapper.module.css'

interface WrapperProps {
    isRootPath: boolean
}

export function Wrapper({ isRootPath, children }: React.PropsWithChildren<WrapperProps>) {
    const wrapperClass = isRootPath ? styles.indexWrapper : styles.postWrapper;
    return (
        <div className={wrapperClass}>
            {children}
        </div>
    )
}
