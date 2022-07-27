import * as React from 'react'
import { Link } from 'gatsby'
import { PostBasics } from '../../model/post-basics'

import * as styles from './post-preview.module.css'

interface PostPreviewProps {
    post: PostBasics
}

export function PostPreview({ post }: PostPreviewProps) {
    const title = post.frontmatter.title || post.fields.slug

    return (
        <article
            className={styles.postListItem}
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h2>
                    <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                    </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
            </header>
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                />
            </section>
        </article>
    )
}
