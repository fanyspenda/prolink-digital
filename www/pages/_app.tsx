import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "styles/globals.css";

const graphqlClient = new ApolloClient({
	uri: "http://localhost:8080/v1/graphql",
	headers: {
		"content-type": "application/json",
		"x-hasura-admin-secret": "adminsecret",
	},
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={graphqlClient}>
			<Component {...pageProps} />;
		</ApolloProvider>
	);
}

export default MyApp;
