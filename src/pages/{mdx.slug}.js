import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
    return(
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
    )
}

export const query = graphql`
query ($id: String = "id") {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
    }
    body
  }
}
`
  
  

export default BlogPost