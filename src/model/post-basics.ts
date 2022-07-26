export interface PostBasics {
    excerpt: string
    fields: {
        slug: string
    }
    frontmatter: {
        date: string
        title: string
        description: string
    }
}
