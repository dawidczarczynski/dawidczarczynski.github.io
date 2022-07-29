import * as React from 'react'
import { graphql } from 'gatsby'

import { SiteMetadata, PostBasics } from '../model'
import { Layout } from '../components/Layout'
import { Bio } from '../components/bio/Bio'
import { Seo } from '../components/seo/Seo'
import { AllPosts } from '../components/all-posts/AllPosts'
import { Texts } from '../constants/texts'

interface BlogIndexProps {
    data: {
        site: {
            siteMetadata: SiteMetadata
        }
        allMarkdownRemark: {
            nodes: PostBasics[]
        }
    }
    location: Location
}

export default function BlogIndex({ data, location }: BlogIndexProps) {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allMarkdownRemark.nodes

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={Texts.ALL_POSTS} />
            <Bio />
            <AllPosts posts={posts} />
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    category
                    image {
                        src {
                            childImageSharp {
                                gatsbyImageData(width: 500)
                            }
                        }
                        alt
                    }
                }
            }
        }
    }
`
