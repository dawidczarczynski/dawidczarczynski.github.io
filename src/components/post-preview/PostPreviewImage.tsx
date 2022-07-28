import * as React from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'

import * as styles from './post-preview-image.module.css'

interface PostPreviewImageProps {
    imageData: ImageDataLike
    alt: string
}

export function PostPreviewImage({ imageData, alt }: PostPreviewImageProps) {
    const image = getImage(imageData)

    return (
        <>
            {image && <GatsbyImage className={styles.postPreviewImage} image={image} alt={alt} />}
        </>
    )
}
