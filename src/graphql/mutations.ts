import gql from 'graphql-tag';

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

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $title: String!
    $body: String!
    $img: String
    $address: String
    $hashtag: String
    $lat: Float!
    $long: Float!
    $permanent: Boolean
    $interestId: Int!
  ) {
    event(
      title: $title
      body: $body
      img: $img
      address: $address
      hashtag: $hashtag
      lat: $lat
      long: $long
      permanent: $permanent
      interestId: $interestId
    ) {
      id
    }
  }
`;
