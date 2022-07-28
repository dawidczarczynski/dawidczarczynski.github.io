import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HeaderComponentProps } from './headerTypes'

import * as styles from './main-header.module.css'

export function MainHeader({ title }: HeaderComponentProps) {
    return (
        <h1 className={styles.mainHeading}>
            <Link to="/">
                <StaticImage
                    className={styles.headingLogo}
                    src="../../images/logo.png"
                    alt={title}
                    width={50}
                    height={50}
                />
                <span className={styles.mainTitle}>{title}</span>
            </Link>
        </h1>
    )
}
