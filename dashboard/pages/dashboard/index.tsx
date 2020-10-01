import { Layout, Menu, Typography } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth0 } from "@auth0/auth0-react";

const { Content, Sider } = Layout;
const { Text, Title } = Typography;
const { SubMenu } = Menu;

const Dashboard = () => {
	const { logout } = useAuth0();
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Menu mode="horizontal">
				<Menu.Item>Prolink Digital</Menu.Item>
				<Menu.Item style={{ float: "right" }} onClick={() => logout()}>
					Logout
				</Menu.Item>
			</Menu>
			<Sider>
				<Menu mode="inline">
					<SubMenu title="Industri Saya">
						<Menu.Item>Tambah Industri</Menu.Item>
						<Menu.Item>Lihat Industri</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		</>
	);
};

export default Dashboard;
