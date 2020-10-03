import { Layout, Menu } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

type activeMenu = {
	menu?: "industry" | "profile";
	subMenu?: "addIndustry" | "viewIndustry" | "updateProfile";
};

export const DashboardMenu: React.FunctionComponent<activeMenu> = ({
	children,
	subMenu,
	menu,
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
						<SubMenu key="profile" title="Profil">
							<Menu.Item
								key="updateProfile"
								onClick={() =>
									router.push(
										"/dashboard/profile/updateProfile"
									)
								}
							>
								Ubah Data Pribadi
							</Menu.Item>
						</SubMenu>
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
