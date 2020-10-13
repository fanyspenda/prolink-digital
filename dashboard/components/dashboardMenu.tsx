import { Layout, Menu } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

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
	const { logout } = useAuth0();
	return (
		<Layout>
			<Header style={{ backgroundColor: "white" }}>
				<Menu mode="horizontal">
					<Menu.Item onClick={() => router.push("/dashboard")}>
						Prolink Digital
					</Menu.Item>
					<Menu.Item
						style={{ float: "right" }}
						onClick={() => logout()}
					>
						Logout
					</Menu.Item>
				</Menu>
			</Header>
			<Layout>
				<Sider width={200}>
					<Menu
						mode="inline"
						style={{ height: "100%" }}
						defaultOpenKeys={[menu]}
						defaultSelectedKeys={[subMenu]}
					>
						<SubMenu title="Industri Saya" key="industry">
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

				<Content
					style={{
						padding: 24,
						margin: 0,
						height: "100%",
						minHeight: "200px",
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};
