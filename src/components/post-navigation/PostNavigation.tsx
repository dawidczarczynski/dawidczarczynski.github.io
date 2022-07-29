import { Link } from 'gatsby'
import * as React from 'react'
import { NavigationPost } from '../../model'

import * as styles from './post-navigation.module.css'

interface PostNavigationProps {
    previous: NavigationPost
    next: NavigationPost
}

export function PostNavigation({ previous, next }: PostNavigationProps) {
    return (
        <nav>
            <ul className={styles.blogPostNav}>
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    )
}
