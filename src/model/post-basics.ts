import { ImageDataLike } from "gatsby-plugin-image"

export interface PostBasics {
    excerpt: string
    fields: {
        slug: string
    }
    frontmatter: {
        date: string
        title: string
        description: string
        category: string
        image: {
            src: ImageDataLike
            alt: string
        }
    }
}
