import * as React from 'react'

export function Footer() {
    return (
        <>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </>
    )
}
