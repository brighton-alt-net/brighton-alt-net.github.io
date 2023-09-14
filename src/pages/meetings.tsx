import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/Layout";
import { PostSummary } from "../types/types";

const Meetings: React.FC<{
  data: { blog: { posts: readonly PostSummary[] } };
}> = ({ data }) => {
  const { posts } = data.blog;
  return (
    <Layout title="Previous Meetings">
      This page is used to maintain a record of all our meetings. Each meeting
      page details the topics discussed and any additional notes.
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/meetings/${kebabCase(post.frontmatter.title)}`}>
            {post.frontmatter.title}
          </Link>
        </p>
      ))}
    </Layout>
  );
};

export default Meetings;

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(sort: { fileAbsolutePath: DESC }) {
      posts: nodes {
        frontmatter {
          title
        }
        id
        fileAbsolutePath
      }
    }
  }
`;
