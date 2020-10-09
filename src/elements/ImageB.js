import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ImageB() {
    const data = useStaticQuery(graphql`
        query {
            ImageB: file(relativePath: { eq: "banner2.jpg" }) {
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
            <Img fixed={data.ImageB.childImageSharp.fixed} />   
        </div>  
    )
}


