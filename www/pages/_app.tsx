import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "styles/antd.css";

const graphqlClient = new ApolloClient({
	uri: "https://funny-fowl-55.hasura.app/v1/graphql",
	headers: {
		"content-type": "application/json",
		"x-hasura-admin-secret": "adminsecret",
	},
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={graphqlClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
