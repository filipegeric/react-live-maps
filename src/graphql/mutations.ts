import gql from "graphql-tag";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
    }
  }
`;

export const VOTE = gql`
  mutation Vote($eventId: ID!, $sign: Int!) {
    vote(eventId: $eventId, sign: $sign)
  }
`;