import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HeaderComponentProps } from "./headerTypes"

export function ArticleHeader({ title }: HeaderComponentProps) {
    return (
        <Link className="header-link-home" to="/">
            <StaticImage
                src="../../images/logo.png"
                alt={title}
                width={20}
                height={20} />
            {title}
        </Link>
    )
}
