import Head from "next/head";
import { useAuth0, Auth0ContextInterface } from "@auth0/auth0-react";

const Home = () => {
	const { isLoading, error, isAuthenticated, logout } = useAuth0();

	if (isLoading) {
		return <p>loading...</p>;
	} else if (error) {
		console.log(error);
		return <p>{error}</p>;
	} else if (isAuthenticated) {
		return (
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
		);
	} else return <p>anda belum login...</p>;
};

export default Home;
