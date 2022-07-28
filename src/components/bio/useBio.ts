import { useStaticQuery, graphql } from 'gatsby'
import { SiteMetadata } from '../../model/site-metadata'

const bioQuery = graphql`
    query BioQuery {
        site {
            siteMetadata {
                author {
                    name
                    summary
                }
            }
        }
    }
`

export function useBio() {
    const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(
        bioQuery
    )

    // Set these values by editing "siteMetadata" in gatsby-config.js
    return { author: site.siteMetadata?.author }
}
