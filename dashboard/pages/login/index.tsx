import { Button, Layout, Typography, Menu } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { KeyOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { Text } = Typography;
const Login = () => {
	const { loginWithRedirect } = useAuth0();
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
					className="bg-white p-10 flex flex-col justify-around rounded-md ml-4 mr-4"
					style={{ flex: 1, textAlign: "center" }}
				>
					<KeyOutlined className="text-3xl" />
					<h1 className="text-2xl font-light">
						Silahkan login dengan menekan tombol di bawah ini
					</h1>
					<Button
						type="primary"
						size="large"
						onClick={() => loginWithRedirect()}
					>
						Login
					</Button>
				</Layout>
				<div style={{ flex: 1 }} />
			</Layout>
		</>
	);
};

export default Login;
