import * as React from 'react'
import { Texts } from '../../constants/texts'

export function Footer() {
    return (
        <>
            © {new Date().getFullYear()}, {Texts.BUILT_WIDTH}
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </>
    )
}
