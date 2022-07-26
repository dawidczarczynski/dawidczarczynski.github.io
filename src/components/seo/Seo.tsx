import * as React from "react"
import { Helmet } from "react-helmet"
import { useSiteMetadata } from "./useSiteMetadata";

interface SeoProps {
    title: string
    description?: string
    lang?: string
    meta?: Object[]
}

export function Seo({ description = '', lang = 'en', meta = [], title }: SeoProps) {
    const { metadataTitle, metadataDescription = description } = useSiteMetadata()
    const seoMetadata = [
        {
            name: `description`,
            content: metadataDescription,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: metadataDescription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        ...meta
    ]

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${metadataTitle}`}
            meta={seoMetadata}
        />
    )
}
