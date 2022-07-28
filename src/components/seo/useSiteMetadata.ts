import { useStaticQuery, graphql } from 'gatsby'
import { SiteMetadata } from '../../model/site-metadata'

const siteMetadataQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`

export function useSiteMetadata(): {
    metadataTitle: string
    metadataDescription: string
} {
    const { site } = useStaticQuery<{ site: { siteMetadata: SiteMetadata } }>(
        siteMetadataQuery
    )

    return {
        metadataTitle: site?.siteMetadata.title,
        metadataDescription: site?.siteMetadata.description || '',
    }
}
