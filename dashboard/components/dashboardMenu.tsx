import { Layout, Menu, Typography, Avatar } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { TeamOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Text, Paragraph } = Typography;

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
						<SubMenu
							title="Industri Saya"
							key="industry"
							icon={<TeamOutlined />}
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
							<SubMenu key="users" title="Pengguna">
								<Menu.Item
									key="viewUser"
									onClick={() =>
										router.push("/dashboard/user")
									}
								>
									Ubah Data Pribadi
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
