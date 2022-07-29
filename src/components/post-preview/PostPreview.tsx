import * as React from 'react'
import { Link } from 'gatsby'
import { PostBasics } from '../../model/post-basics'
import { PostPreviewImage } from './PostPreviewImage'
import { PostPreviewContent } from './PostPreviewContent'

import * as styles from './post-preview.module.css'
import { PostMetadata } from '../post-metadata/PostMetadata'


interface PostPreviewProps {
    post: PostBasics
}

export function PostPreview({ post }: PostPreviewProps) {
    const title = post.frontmatter.title || post.fields.slug
    const description = post.frontmatter.description || post.excerpt

    return (
        <article
            className={styles.postListItem}
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <Link to={post.fields.slug} itemProp="url" style={{ textDecoration: 'none' }}>
                    <PostPreviewImage imageData={post.frontmatter.image.src} alt={post.frontmatter.image.alt} />
                    <h2 itemProp="headline">{title}</h2>
                </Link>
            </header>
            <section className={styles.postContent}>
                <div className={styles.postMetadata}>
                    <PostMetadata 
                        date={post.frontmatter.date}
                        category={post.frontmatter.category} />
                </div>
                <PostPreviewContent 
                    description={description} />
            </section>
        </article>
    )
}
