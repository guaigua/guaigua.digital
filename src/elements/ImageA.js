import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function ImageA() {
    const data = useStaticQuery(graphql`
        query {
            ImageA: file(relativePath: { eq: "banner1.jpg" }) {
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
            <Img fixed={data.ImageA.childImageSharp.fixed} />   
        </div>  
    )
}


