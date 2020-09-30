import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "styles/antd.css";

const auth0Domain = "dev-i7afx3za.au.auth0.com";
const auth0clientId = "KI2sD2pKaKpg05884DefbP4MMpX94gCi";

const graphqlClient = new ApolloClient({
	uri: "https://vital-liger-80.hasura.app/v1/graphql",
	headers: {
		"x-hasura-admin-secret": "adminsecret",
	},
	cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }) => {
	return (
		<Auth0Provider
			clientId={auth0clientId}
			domain={auth0Domain}
			redirectUri="http://localhost:4000/"
			audience="https://prolink-digital-api/"
		>
			<ApolloProvider client={graphqlClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</Auth0Provider>
	);
};

export default MyApp;
