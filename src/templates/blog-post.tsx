import * as React from "react"
import { graphql } from "gatsby"

import { SiteMetadata, NavigationPost, PostDetails } from "../model"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/Seo"
import { FullPost } from "../components/posts/FullPost"
import { PostNavigation } from "../components/posts/PostNavigation"

interface BlogPostTemplateProps {
    data: {
        site: {
            siteMetadata: SiteMetadata
        }
        markdownRemark: PostDetails
        previous: NavigationPost
        next: NavigationPost
    }
    location: Location
}

export default function BlogPostTemplate({ data, location }: BlogPostTemplateProps) {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const { previous, next } = data

    return (
        <Layout location={location} title={siteTitle}>
            <Seo
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <FullPost post={post} />
            <PostNavigation previous={previous} next={next} />
        </Layout>
    )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
