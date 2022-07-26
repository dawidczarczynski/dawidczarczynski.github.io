import * as React from "react"
import { graphql } from "gatsby"

import { SiteMetadata } from "../model"
import { Layout } from "../components/Layout"
import { Seo } from "../components/seo/Seo"

interface NotFoundPageProps {
  data: {
    site: {
      siteMetadata: SiteMetadata
    }
  }
  location: Location
}

export default function NotFoundPage({ data, location }: NotFoundPageProps) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
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
  }
`
