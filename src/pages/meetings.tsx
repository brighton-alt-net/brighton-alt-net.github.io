import React from "react";
import { Link, PageProps, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/Layout";

const Meetings: React.FC<PageProps<Queries.MeetingsQueryQuery>> = ({ data }) => {
  const { posts } = data.blog;
  return (
    <Layout title="Previous Meetings">
      This page is used to maintain a record of all our meetings. Each meeting
      page details the topics discussed and any additional notes.
      {posts.map((post) => (
        <p key={post.id}>
          <Link to={`/meetings/${kebabCase(post.frontmatter?.title || undefined)}`}>
            {post.frontmatter?.title}
          </Link>
        </p>
      ))}
    </Layout>
  );
};

export default Meetings;

export const pageQuery = graphql`
  query MeetingsQuery {
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
