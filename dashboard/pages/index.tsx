import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
	const { isLoading, error, isAuthenticated, logout } = useAuth0();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.push("/login");
		} else if (!isLoading && isAuthenticated) {
			router.push("/dashboard");
		}
	}, [isLoading, isAuthenticated]);

	if (isLoading) {
		return <p>loading...</p>;
	} else if (error) {
		console.log(error);
		return <p>{error}</p>;
	} else if (isAuthenticated) {
		return <p>Menghubungkan ke dashboard...</p>;
	} else {
		return <p>anda belum login</p>;
	}
};

export default Home;
