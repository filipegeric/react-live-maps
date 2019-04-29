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
			interest {
				id
				name
				color
			}
		}
	}
`;
