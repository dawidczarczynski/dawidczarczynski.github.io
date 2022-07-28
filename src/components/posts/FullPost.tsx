import * as React from 'react'
import { PostDetails } from '../../model/post-details'
import { Bio } from '../bio/Bio'

import * as styles from './full-post.module.css'

interface FullPostProps {
    post: PostDetails
}

export function FullPost({ post }: FullPostProps) {
    return (
        <article
            className={styles.blogPost}
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
            </header>
            <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
            />
            <hr />
            <footer>
                <Bio />
            </footer>
        </article>
    )
}
