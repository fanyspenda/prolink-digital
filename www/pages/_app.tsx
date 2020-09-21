import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "styles/antd.css";
import { Row, Col, Typography, Layout, Menu, Space } from "antd";
import {
	RiMenuLine,
	RiFacebookBoxFill,
	RiTelegramFill,
	RiInstagramFill,
} from "react-icons/ri";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const graphqlClient = new ApolloClient({
	uri: "https://funny-fowl-55.hasura.app/v1/graphql",
	headers: {
		"content-type": "application/json",
		"x-hasura-admin-secret": "adminsecret",
	},
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	const { Text } = Typography;
	const { Footer } = Layout;
	const router = useRouter();

	const MenuRenderer = () => {
		return (
			<Menu mode="horizontal" style={{ position: "relative" }}>
				<Menu.Item
					onClick={() => router.push("/")}
					key="menu1"
					style={{
						fontWeight: "bolder",
						fontSize: "20px",
					}}
				>
					Prolink <Text style={{ color: "#F9AE07" }}>Digital</Text>
				</Menu.Item>

				<Menu.SubMenu
					icon={
						<RiMenuLine size="25px" style={{ marginTop: "10px" }} />
					}
					style={{
						float: "right",
					}}
				>
					<Menu.Item>Tentang Kami</Menu.Item>
				</Menu.SubMenu>
			</Menu>
		);
	};

	const FooterRenderer = () => {
		return (
			<Footer
				style={{
					backgroundColor: "#464239",
					color: "white",
					height: "100px",
					width: "100%",
					position: "absolute",
				}}
			>
				<Row justify="space-between" align="middle">
					<Col>
						Prolink{" "}
						<Text style={{ color: "#F9AE07" }}>Digital</Text>
					</Col>
					<Col>Copyright © 2020 Prolink.Digital</Col>
					<Col>
						<Space>
							<RiFacebookBoxFill size="25px" />
							<RiTelegramFill size="25px" />
							<RiInstagramFill size="25px" />
						</Space>
					</Col>
				</Row>
			</Footer>
		);
	};

	return (
		<ApolloProvider client={graphqlClient}>
			<Head>
				<link
					href="https://unpkg.com/tailwindcss@^1.8/dist/tailwind.min.css"
					rel="stylesheet"
				/>
			</Head>
			{MenuRenderer()}
			<Component {...pageProps} />
			<div>{FooterRenderer()}</div>
		</ApolloProvider>
	);
}

export default MyApp;
