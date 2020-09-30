import Head from "next/head";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
	const { isLoading, isAuthenticated, logout } = useAuth0();

	return (
		!isLoading &&
		isAuthenticated && (
			<>
				<Head>
					<title>Prolink Dashboard</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>this is dashboard for logged user only</h1>
				<button
					onClick={() =>
						logout({ returnTo: "http://localhost:4000/login" })
					}
				>
					Logout
				</button>
			</>
		)
	);
};

export default Home;
