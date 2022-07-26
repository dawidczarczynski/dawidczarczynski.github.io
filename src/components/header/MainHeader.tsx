import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HeaderComponentProps } from "./headerTypes"

export function MainHeader({ title }: HeaderComponentProps) {
    return (
        <h1 className="main-heading">
            <Link to="/">
                <StaticImage
                    src="../../images/logo.png"
                    alt={title}
                    width={50}
                    height={50} />
                {title}
            </Link>
        </h1>
    )
}