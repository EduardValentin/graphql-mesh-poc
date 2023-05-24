import { print } from "graphql";
import { V1Samurai, Resolvers } from "./.mesh";

export const resolvers: Resolvers = {
	com_sword_v1_Sword: {
		samurai(root, args, context, info) {
			return context["samurai-api"].Query.apiV1SamuraiServiceListById({
				root,
				context,
				info,
				key: root.samurai_id,
				argsFromKeys: (ids) => {
					console.log(ids);
					return { input: { ids } };
				},
				valuesFromResults: (data) =>
					(data as [V1Samurai]).find(
						(samurai) => samurai.id === root.samurai_id
					),
				selectionSet: (samuraiSelectionSet) => /* GraphQL */ `
					${print(samuraiSelectionSet)}
					# Will print something like { id name }
				`,
			});
		},
	},
};
