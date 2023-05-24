import { useEffect } from "react";
import "./App.css";
import useCreateSword from "./graphql/create-sword";

function App() {
	const [createSword, { loading, data }] = useCreateSword();

	useEffect(() => {
		createSword({
			variables: {
				input: {
					name: "XD",
					samuraiId: "DX",
					swordAttributes: {
						bladeHeight: 1.5,
						bladeWidth: 1.5,
						decoration: "something ",
					},
					type: "TACHI",
				},
			},
		});
	}, []);

	useEffect(() => {
		if (data) {
			alert("request successful");
		}
	}, []);

	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<div>
			The only purpose of this app is to make the request via @apollo/client
		</div>
	);
}

export default App;
