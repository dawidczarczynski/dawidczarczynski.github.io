export interface PostDetails {
    id: string
    excerpt: string
    html: string
    frontmatter: {
        title: string
        date: string
        description: string
    }
}
