import gql from 'graphql-tag';

export const GET_INTERESTS = gql`
  {
    interests {
      id
      name
    }
  }
`;

export const GET_EVENTS = gql`
  query Events($ids: [ID]!) {
    events(interestIds: $ids) {
      id
      title
      img
      startAt
      address
      lat
      long
      body
      interest {
        id
        name
        color
      }
      votes {
        id
        sign
        user {
          id
        }
      }
    }
  }
`;

export const ME = gql`
  {
    me {
      id
      username
      email
      firstName
      lastName
    }
  }
`;
