import Head from "next/head";
import NextLink from "next/link";
import {
	Card,
	Typography,
	Row,
	Col,
	Layout,
	Menu,
	Button,
	Carousel,
	Space,
} from "antd";
import {
	RiPencilRuler2Fill,
	RiMovie2Fill,
	RiFileCodeFill,
	RiGamepadFill,
	RiArrowDownSFill,
} from "react-icons/ri";
import { gql, useQuery } from "@apollo/client";
// import styles from "styles/Home.module.css";
import FormRenderer from "components/form";
import {
	CategoriesQuery,
	Category,
	LandingPageDataDocument,
	LandingPageDataQuery,
} from "graphqlSchema/types";

type omittedCategory = Omit<Category, "companies" | "companies_aggregate">;
type OmittedCompany = Omit<LandingPageDataQuery, "category">;

export default function Home() {
	const { data, loading, error } = useQuery<LandingPageDataQuery>(
		LandingPageDataDocument
	);

	const { Meta } = Card;
	const { Title, Text, Link, Paragraph } = Typography;

	const IconManager = (categoryName: string) => {
		if (categoryName == "animasi")
			return <RiMovie2Fill size="40%" style={{ marginRight: "10px" }} />;
		else if (categoryName == "aplikasi")
			return (
				<RiFileCodeFill size="40%" style={{ marginRight: "10px" }} />
			);
		else if (categoryName == "desain")
			return (
				<RiPencilRuler2Fill
					size="40%"
					style={{ marginRight: "10px" }}
				/>
			);
		else if (categoryName == "gim")
			return <RiGamepadFill size="40%" style={{ marginRight: "10px" }} />;
	};

	const CardManager = (categories: CategoriesQuery, colors: string[]) => {
		return (
			<Layout
				style={{
					background: "none",
					display: "flex",
					flexFlow: "row wrap",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{categories.category.map((value, index) => (
					<NextLink
						href="/category/[result]"
						as={`/category/${value.id}`}
					>
						<Card
							cover={IconManager(value.name)}
							hoverable
							style={{
								width: "300px",
								margin: "10px",
								border: `3px solid ${colors[index]}`,
							}}
						>
							<Meta title={<b>{value.name}</b>} />
						</Card>
					</NextLink>
				))}
			</Layout>
		);
	};

	const CardRenderer = () => {
		return (
			<div
				style={{
					marginTop: "20px",
				}}
			>
				<p
					style={{
						fontSize: "15px",
						fontWeight: "lighter",
					}}
				>
					atau klik kategori di bawah
				</p>
				<RiArrowDownSFill color="blue" size="20px" />
				<br />

				{!loading &&
					CardManager(data, ["blue", "orange", "purple", "red"])}
			</div>
		);
	};

	const HeaderRenderer = () => {
		return (
			<Row justify="center" style={{ marginTop: "300px" }}>
				<Col style={{ textAlign: "center" }}>
					<Title style={{ color: "white", fontSize: "80px" }}>
						Probolinggo{" "}
						<Text style={{ color: "#F9AE07" }}>Digital</Text>
					</Title>
					<Text style={{ color: "white", fontSize: "20px" }}>
						kumpulan para penggiat industri IT Bayuangga
					</Text>
					<br />
					<br />
					<Button type="primary" size="large">
						Lihat Semua Perusahaan
					</Button>
				</Col>
			</Row>
		);
	};

	const backgroundRenderer = () => {
		return (
			<img
				src="/bg.png"
				style={{
					width: "100%",
					height: "100%",
					position: "absolute",
					objectFit: "cover",
				}}
			/>
		);
	};

	const MenuRenderer = () => {
		return (
			<Menu
				mode="horizontal"
				style={{ position: "relative", padding: "5px 20px" }}
			>
				<Menu.Item
					key="menu1"
					style={{
						fontWeight: "bolder",
						fontSize: "20px",
					}}
				>
					Prolink <Text style={{ color: "#F9AE07" }}>Digital</Text>
				</Menu.Item>

				<Menu.Item
					style={{
						float: "right",
						fontWeight: "bold",
					}}
				>
					Tentang Kami
				</Menu.Item>
			</Menu>
		);
	};

	const CategoryRenderer = (categories: omittedCategory[]) => {
		return (
			<Row
				justify="center"
				align="middle"
				style={{
					textAlign: "center",
					marginTop: "20%",
				}}
			>
				<Col span={8} md={{ span: 6 }} style={{ marginRight: "30px" }}>
					<img src="/categories.svg" style={{ width: "70%" }} />
					<Title>kategori</Title>
					<Text>
						Industri IT di Probolinggo bergerak di bidang apa ajah
						sih? yuk klik di bagian kategori.
					</Text>
				</Col>
				<Col
					span={10}
					md={{ span: 5 }}
					style={{
						textAlign: "center",
						marginLeft: "30px",
					}}
				>
					<Carousel autoplay>
						{categories.map((category) => (
							<Card
								bodyStyle={{
									paddingBottom: "100px",
								}}
							>
								<Title level={4}>
									<Link>
										<Space direction="vertical">
											{IconManager(category.name)}

											{category.name}
										</Space>
									</Link>
								</Title>
							</Card>
						))}
					</Carousel>
				</Col>
			</Row>
		);
	};

	const SearchBarRenderer = () => {
		return (
			<Layout style={{ marginTop: "10%" }}>
				<Layout>
					<img
						src="/bg.png"
						style={{
							width: "100%",
							minHeight: "350px",
							maxHeight: "350px",
							overflow: "hidden",
							position: "absolute",
							objectFit: "cover",
						}}
					/>
				</Layout>
				<Row justify="center" style={{ marginTop: "10vh" }}>
					<Col>
						<Title
							style={{
								color: "white",
								textAlign: "center",
							}}
						>
							Cari Industri
						</Title>
						<Text style={{ color: "white", fontSize: "15px" }}>
							kumpulan para penggiat industri IT Bayuangga
						</Text>
					</Col>
				</Row>
				<div style={{ margin: "40px 30px 0px 30px" }}>
					{FormRenderer()}
				</div>
			</Layout>
		);
	};

	const CarouselRenderer = (data: OmittedCompany) => {
		const companyCards = data.company.map((value) => (
			<Card
				cover={<img src="/defaultImage.jpeg" />}
				// title={<Title>{company.name}</Title>}
				style={{
					backgroundColor: "#000",
					height: "100px",
					minHeight: "200px",
				}}
			>
				<Title level={3} ellipsis>
					{value.name}
				</Title>
				<Paragraph ellipsis>{value.description}</Paragraph>
			</Card>
		));
		return (
			<Row
				justify="center"
				align="middle"
				style={{
					textAlign: "center",
					marginTop: "140px",
				}}
			>
				<Col span={8} md={{ span: 6 }} style={{ marginRight: "30px" }}>
					<>
						<img src="/company.svg" style={{ width: "70%" }} />
					</>

					<Title>Industri Terdaftar</Title>
					<Text>
						Yuk lihat Industri-Industri IT Keren yang sudah
						berkontribusi untuk kota ini
					</Text>
				</Col>
				<Col
					span={10}
					md={{ span: 5 }}
					style={{
						textAlign: "center",
						marginLeft: "30px",
					}}
				>
					<Carousel autoplay={true}>
						{companyCards.map((companyCard) => companyCard)}
					</Carousel>
				</Col>
			</Row>
		);
	};

	error && <p>{error.message}</p>;
	return (
		<>
			<Head>
				<title>Prolink Digital</title>
			</Head>
			<Layout>
				{backgroundRenderer()}
				{MenuRenderer()}
				{HeaderRenderer()}
				{!loading && CategoryRenderer(data.category)}
				{SearchBarRenderer()}
				{!loading && CarouselRenderer(data)}
				{/* {CardRenderer()} */}
			</Layout>
		</>
	);
}
