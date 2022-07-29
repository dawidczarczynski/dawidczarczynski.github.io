import { ImageDataLike } from "gatsby-plugin-image"

export interface PostDetails {
    id: string
    excerpt: string
    html: string
    frontmatter: {
        title: string
        date: string
        description: string
        category: string
        image: {
            src: ImageDataLike
            alt: string
        }
    }
}
