import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import * as React from 'react'
import { PostDetails } from '../../model/post-details'
import { Bio } from '../bio/Bio'
import { PostMetadata } from '../post-metadata/PostMetadata'

import * as styles from './full-post.module.css'

interface FullPostProps {
    post: PostDetails
}

export function FullPost({ post }: FullPostProps) {
    const image = getImage(post.frontmatter.image.src)

    return (
        <article
            className={styles.blogPost}
            itemScope
            itemType="http://schema.org/Article"
        >
            <header>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <div className={styles.blogPostMetadata}>
                    <PostMetadata
                        date={post.frontmatter.date} 
                        category={post.frontmatter.category}
                        showDistance={false} />
                </div>
            </header>
            <section>
                 {image && <GatsbyImage 
                    image={image} 
                    alt={post.frontmatter.image.alt} />}
                <p
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody" />
            </section>
            <hr />
            <footer>
                <Bio />
            </footer>
        </article>
    )
}
