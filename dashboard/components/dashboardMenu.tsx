import { Layout, Menu, Typography, Avatar } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import {
	BankOutlined,
	LogoutOutlined,
	TeamOutlined,
	DashboardOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Text, Link } = Typography;

export type activeMenu = {
	menu?: "industry" | "profile" | "users";
	subMenu?: "addIndustry" | "viewIndustry" | "viewUser";
	userRole: string;
};

export const DashboardMenu: React.FunctionComponent<activeMenu> = ({
	children,
	subMenu,
	menu,
	userRole,
}) => {
	const router = useRouter();
	const { logout, user } = useAuth0();
	console.log(user);

	return (
		<Layout>
			<Menu mode="horizontal">
				<Menu.Item className="text-lg">
					Prolink <Text style={{ color: "#F9AE07" }}>Digital</Text>
				</Menu.Item>
				<SubMenu
					icon={<Avatar src={user?.picture} />}
					style={{ float: "right" }}
				>
					<Menu.ItemGroup title="profil">
						<Menu.Item
							onClick={() => logout()}
							icon={<LogoutOutlined />}
						>
							Logout
						</Menu.Item>
					</Menu.ItemGroup>
				</SubMenu>
			</Menu>

			<Layout>
				<Sider
					width={200}
					style={{ backgroundColor: "#FFFFFF" }}
					className="pt-5"
				>
					<Menu
						mode="inline"
						defaultOpenKeys={[menu]}
						defaultSelectedKeys={[subMenu]}
					>
						<Menu.Item
							icon={<DashboardOutlined />}
							key="dashboard"
							onClick={() => router.push("/dashboard")}
						>
							<text className="font-semibold">Dasbor</text>
						</Menu.Item>

						<SubMenu
							title={
								<text className="font-semibold">Industri</text>
							}
							key="industry"
							icon={<BankOutlined />}
						>
							<Menu.Item
								key="addIndustry"
								onClick={() =>
									router.push(
										"/dashboard/company/createCompany"
									)
								}
							>
								Tambah Industri
							</Menu.Item>
							<Menu.Item
								key="viewIndustry"
								onClick={() =>
									router.push("/dashboard/company")
								}
							>
								Lihat Industri
							</Menu.Item>
						</SubMenu>
						{userRole == "admin" && (
							<SubMenu
								key="users"
								title={
									<text className="font-semibold">
										Pengguna
									</text>
								}
								icon={<TeamOutlined />}
							>
								<Menu.Item
									key="viewAdmin"
									onClick={() =>
										router.push("/dashboard/admin")
									}
								>
									Lihat Admin
								</Menu.Item>
								<Menu.Item
									key="viewUser"
									onClick={() =>
										router.push("/dashboard/user")
									}
								>
									Lihat Pengguna
								</Menu.Item>
							</SubMenu>
						)}
					</Menu>
				</Sider>

				<Content className="h-screen relative p-5">{children}</Content>
			</Layout>
		</Layout>
	);
};
