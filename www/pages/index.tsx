import Head from "next/head";

import NextLink from "next/link";
import {
	Card,
	Typography,
	Row,
	Col,
	Layout,
	Button,
	Carousel,
	Divider,
} from "antd";
import {
	RiPencilRuler2Fill,
	RiMovie2Fill,
	RiFileCodeFill,
	RiGamepadFill,
} from "react-icons/ri";
import { useQuery } from "@apollo/client";
import SearchBarRenderer from "components/styledForm";
import {
	Category,
	LandingPageDataDocument,
	LandingPageDataQuery,
} from "graphqlSchema/types";

type omittedCategory = Omit<Category, "companies" | "companies_aggregate">;
type OmittedCompany = Omit<LandingPageDataQuery, "category">;
const { Title, Text, Link, Paragraph } = Typography;

const categoryImage = [
	{
		icon: [],
		image: "/category/animation.svg",
	},
	{
		icon: [],
		image: "/category/application.svg",
	},
	{
		icon: [],
		image: "/category/design.svg",
	},
	{
		icon: [],
		image: "/category/game.svg",
	},
];

export default function Home() {
	const { data, loading, error } = useQuery<LandingPageDataQuery>(
		LandingPageDataDocument
	);

	const IconManager = (categoryName: string) => {
		if (categoryName == "animasi")
			return <RiMovie2Fill size="30px" style={{ marginRight: "10px" }} />;
		else if (categoryName == "aplikasi")
			return (
				<RiFileCodeFill size="30px" style={{ marginRight: "10px" }} />
			);
		else if (categoryName == "desain")
			return (
				<RiPencilRuler2Fill
					size="30px"
					style={{ marginRight: "10px" }}
				/>
			);
		else if (categoryName == "gim")
			return (
				<RiGamepadFill size="30px" style={{ marginRight: "10px" }} />
			);
	};

	const HeaderRenderer = () => {
		return (
			<Row justify="center" style={{ marginTop: "300px" }}>
				<Col style={{ textAlign: "center" }}>
					<Title
						style={{
							color: "white",
							fontSize: "7vmax",
						}}
					>
						Probolinggo{" "}
						<Text style={{ color: "#F9AE07" }}>Digital</Text>
					</Title>
					<Text style={{ color: "white", fontSize: "3vh" }}>
						kumpulan para penggiat industri IT Bayuangga
					</Text>
					<br />
					<br />
					<NextLink href="/search/[search]" as="/search/all">
						<Button type="primary" size="large">
							Lihat Semua Perusahaan
						</Button>
					</NextLink>
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

	const CategoryRenderer = (categories: omittedCategory[]) => {
		const newCategories = categories.map(
			({ name, description, id }, index) => ({
				id,
				name,
				description,
				image: categoryImage[index].image,
				icons: categoryImage[index].icon,
			})
		);
		return (
			<>
				{/* image category */}
				<div
					className="mt-32 flex flex-col items-center md:items-start text-center justify-center
				md:flex-row md:mt-48"
				>
					<div className="w-56 flex flex-col items-center md:w-3/12">
						<img src="/categories.svg" className="md:h-56" />
						<Title level={2}>Kategori</Title>
						<Text>
							Cek kategori yang tersedia di Prolink Digital
						</Text>
					</div>

					{/* divider */}
					<div className="w-48">
						<Divider
							dashed
							className="border-gray-600 w-48 
							md:hidden"
						/>
						<Divider
							type="vertical"
							dashed
							className="border-gray-600 h-56 hidden 
							md:inline-block"
						/>
					</div>

					{/* carousel categories */}
					<div className="w-56 md:w-3/12">
						<Carousel autoplay={true}>
							{newCategories.map((category) => (
								<div>
									<img
										src={category.image}
										className="h-40 md:md:w-3/4 md:h-56 m-auto"
									/>
									<div>
										<NextLink
											href="/category/[result]"
											as={`/category/${category.id}`}
										>
											<Link className="text-2xl font-bold">
												{category.name}
											</Link>
										</NextLink>
										<Paragraph className="h-40 md:h-20">
											{category.description}
										</Paragraph>
									</div>
								</div>
							))}
						</Carousel>
					</div>
				</div>
			</>
		);
	};

	const CompanyRenderer = (data: OmittedCompany) => {
		const companyCards = data.company.map((value) => (
			<Card
				cover={<img src="/defaultImage.jpeg" />}
				// title={<Title>{company.name}</Title>}
				style={{
					backgroundColor: "#000",

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
			<Layout style={{ backgroundColor: "white", paddingBottom: "40px" }}>
				<Row
					justify="center"
					align="middle"
					style={{
						textAlign: "center",
						marginTop: "140px",
					}}
				>
					<Col span={24}>
						<Title>Industri Terdaftar</Title>
					</Col>
				</Row>
				<Row
					justify="center"
					align="middle"
					style={{
						textAlign: "center",
					}}
				>
					<Col
						span={8}
						md={{ span: 6 }}
						style={{ marginRight: "30px" }}
					>
						<Row>
							<Col>
								<img
									src="/company.svg"
									style={{ width: "70%" }}
								/>
							</Col>
						</Row>
						<Row
							style={{
								marginTop: "40px",
							}}
						>
							<Text>
								Yuk lihat Industri-Industri IT Keren yang sudah
								berkontribusi untuk kota ini
							</Text>
						</Row>
					</Col>
					<Col
						span={10}
						md={{ span: 5 }}
						style={{
							textAlign: "center",
							marginLeft: "30px",
						}}
					>
						<Carousel
							autoplay={true}
							style={{
								boxShadow: "2px 2px 3px #aaa",
								marginBottom: "10px",
							}}
						>
							{companyCards.map((companyCard) => companyCard)}
						</Carousel>
					</Col>
				</Row>
			</Layout>
		);
	};

	error && <p>{error.message}</p>;
	const { Content } = Layout;
	return (
		<>
			<Head>
				<title>Prolink Digital</title>
			</Head>
			<Layout>
				<Content
					style={{
						backgroundColor: "white",
					}}
				>
					{backgroundRenderer()}
					{HeaderRenderer()}
					{!loading && CategoryRenderer(data.category)}
					<div style={{ marginTop: "3vh" }}>
						{SearchBarRenderer()}
					</div>
					{!loading && CompanyRenderer(data)}
					{/* {CardRenderer()} */}
				</Content>
			</Layout>
		</>
	);
}
