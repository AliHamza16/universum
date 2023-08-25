import { gql } from "@apollo/client";
const GET_POSTS = gql`
  query GetPosts {
    posts {
      id,
      title,
      abstract,
      categories {
        name
      },
      featuredImage {
        url
      },
      createdAt,
      content {
        html
      },
      pdf {
        url
      }
    }
  }
`;

export default GET_POSTS