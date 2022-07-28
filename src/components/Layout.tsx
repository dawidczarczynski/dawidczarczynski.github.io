import * as React from 'react'
import { Footer } from './footer/Footer'
import { headerFactory } from './header/headerFactory'

import * as styles from './layout.module.css'

interface LayoutProps {
    location: Location
    title: string
}

export function Layout({
    location,
    title,
    children,
}: React.PropsWithChildren<LayoutProps>) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    const Header = headerFactory(isRootPath)

    return (
        <div className={styles.wrapper} data-is-root-path={isRootPath}>
            <header className={styles.header}>
                <Header title={title} />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
