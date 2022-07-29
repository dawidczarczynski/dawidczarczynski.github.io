import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { getPostDate, getPostDateDistance } from "../../functions/dates"
import * as styles from "./post-metadata.module.css"

interface PostMetadataProps {
    category: string
    date: string
    showDistance?: boolean
}

export function PostMetadata({ category, date, showDistance = true }: PostMetadataProps) {
    const displayDate = showDistance ? getPostDateDistance(date) : getPostDate(date);

    return (
        <div className={styles.postMetadata}>
            <div className={styles.postMetadataLeft}>
                <StaticImage 
                    className={styles.postCategoryImage}
                    width={30} 
                    height={30} 
                    src="../../images/ts.png" 
                    alt={category} />
            </div>
            <div>
                <p className={styles.postCategory}>{category}</p>
                <p className={styles.postDistance}>{displayDate}</p>
            </div>
    </div>
    )
}
