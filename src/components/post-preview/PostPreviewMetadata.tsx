import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { usePostDateDistance } from "../../hooks/use-post-date-distance"
import * as styles from "./post-preview-metadata.module.css"

interface PostPreviewMetadataProps {
    category: string
    date: string
}

export function PostPreviewMetadata({ category, date }: PostPreviewMetadataProps) {
    const { distance } = usePostDateDistance(date);

    return (
        <div className={styles.previewMetadata}>
            <div className={styles.previewMetadataLeft}>
                <StaticImage 
                    className={styles.previewCategoryImage}
                    width={30} 
                    height={30} 
                    src="../../images/ts.png" 
                    alt={category} />
            </div>
            <div className={styles.previewMetadataRight}>
                <p className={styles.previewCategory}>{category}</p>
                <p className={styles.previewDistance}>{distance}</p>
            </div>
    </div>
    )
}
