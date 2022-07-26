/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Texts } from "../../constants/texts"
import { useBio } from "./useBio"

export function Bio() {
    const { author } = useBio()

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpg"
                width={50}
                height={50}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <p>
                    { Texts.WRITTEN_BY } <strong>{author.name}</strong> {author?.summary || null}
                </p>
            )}
        </div>
    )
}
