import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "styles/antd.css";
import {
	AUTH0_CLIENT_ID,
	AUTH0_DOMAIN,
	HASURA_GRAPHQL,
	BASE_URL,
} from "environtment";

const graphqlClient = new ApolloClient({
	uri: HASURA_GRAPHQL,
	headers: {
		"x-hasura-admin-secret": "adminsecret",
	},
	cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
	return (
		<Auth0Provider
			clientId={AUTH0_CLIENT_ID}
			domain={AUTH0_DOMAIN}
			redirectUri={BASE_URL}
			audience="https://prolink-digital-api/"
		>
			<ApolloProvider client={graphqlClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Auth0Provider>
	);
};

export default MyApp;
