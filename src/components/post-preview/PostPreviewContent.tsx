import * as React from 'react'
import * as styles from './post-preview-content.module.css'

interface PostPreviewContentProps {
    description: string
}

export function PostPreviewContent({ description }: PostPreviewContentProps) {
    return (
        <p
            className={styles.postDescription}
            dangerouslySetInnerHTML={{
                __html: description,
            }}
            itemProp="description"
        />
    )
}