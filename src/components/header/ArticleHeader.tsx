import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HeaderComponentProps } from './headerTypes'

import * as styles from './article-header.module.css'

export function ArticleHeader({ title }: HeaderComponentProps) {
    return (
        <Link className={styles.headerLinkHome} to="/">
            <StaticImage
                src="../../images/logo.png"
                alt={title}
                width={20}
                height={20}
            />
            {title}
        </Link>
    )
}
