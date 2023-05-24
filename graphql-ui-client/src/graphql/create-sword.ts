import { gql, useMutation } from "@apollo/client";

export const createSwordDoc = gql(/* GraphQL */ `
	mutation createSword($input: V1CreateSwordRequestInput!) {
		apiV1SwordServiceCreateSword(input: $input) {
			id
			createdAt
		}
	}
`);

export default function useCreateSword() {
	return useMutation(createSwordDoc);
}
