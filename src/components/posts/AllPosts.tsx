import * as React from 'react'
import { PostBasics } from '../../model/post-basics'
import { PostPreview } from '../post-preview/PostPreview'

import * as styles from './all-posts.module.css'

interface AllPostsProps {
    posts: PostBasics[]
}

export function AllPosts({ posts = [] }: AllPostsProps) {
    if (!posts.length) {
        return (
            <p>
                No blog posts found. Add markdown posts to "content/blog" (or
                the directory you specified for the "gatsby-source-filesystem"
                plugin in gatsby-config.js).
            </p>
        )
    }

    return (
        <ol className={styles.allPostsList}>
            {posts.map(post => {
                return (
                    <li key={post.fields.slug} >
                        <PostPreview post={post}></PostPreview>
                    </li>
                )
            })}
        </ol>
    )
}
