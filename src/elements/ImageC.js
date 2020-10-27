import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ImageC() {
    const data = useStaticQuery(graphql`
        query {
            ImageC: file(relativePath: { eq: "banner4.jpg" }) {
                childImageSharp {
                fixed(width: 1356, height: 528) {
                    ...GatsbyImageSharpFixed
                }
                }
            }
        }
    `)
    return (
        <div>
            <Img fixed={data.ImageC.childImageSharp.fixed} />   
        </div>  
    )
}


