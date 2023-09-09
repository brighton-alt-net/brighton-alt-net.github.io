import { graphql } from "gatsby";
import React, { FC } from "react";

import { Post } from "../../types/types";
import Layout from "../../components/Layout";

const Frame: FC<{ data: { markdownRemark: Post } }> = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout title={post.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  );
};

export default Frame;

export const query = graphql`
  query BlogQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
