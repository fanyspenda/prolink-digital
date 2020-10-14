import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout, Menu, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;
const loadingComponent = (message: string) => {
	return (
		<>
			<Layout className="flex flex-col items-center justify-center h-screen border-gray-700">
				<div style={{ flex: 1 }}>
					<Header
						style={{ backgroundColor: "#FFFFFF" }}
						className="w-screen"
					>
						<Menu theme="light" className="text-center text-2xl">
							Prolink{" "}
							<Text style={{ color: "#F9AE07" }}>Digital</Text>
						</Menu>
					</Header>
				</div>
				<Layout
					className="bg-white p-10 flex flex-col justify-around rounded-md ml-4 mr-4 w-64"
					style={{ flex: 1, textAlign: "center" }}
				>
					<LoadingOutlined className="text-3xl" />
					<h1 className="text-2xl font-light">{message}</h1>
				</Layout>
				<div style={{ flex: 1 }} />
			</Layout>
		</>
	);
};

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
		return loadingComponent("loading...");
	} else if (error) {
		console.log(error);
		return <p>{error}</p>;
	} else if (isAuthenticated) {
		return loadingComponent("menghubungkan ke dashdashboardboard...");
	} else {
		return <p>anda belum login</p>;
	}
};

export default Home;
