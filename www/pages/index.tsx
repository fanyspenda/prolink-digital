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
					className="mt-32 flex flex-col items-center divide-y-4 divide-x-0 divide-gray-600 divide-dashed text-center justify-center
				md:flex-row md:items-start md:mt-56 md:mb-16 md:divide-x-4 md:divide-y-0"
				>
					<div className="w-56 flex flex-col items-center md:w-2/5 pb-6 md:pr-10">
						<img src="/categories.svg" className="md:h-56" />
						<Title level={2}>Kategori</Title>
						<Text>
							Industri IT di Probolinggo terbagi menjadi beberapa
							kategori.
						</Text>
						<Text>
							Yuk Geser untuk liat kategori apa ajah yang tersedia
						</Text>
					</div>

					{/* carousel categories */}
					<div className="w-56 md:w-2/5 pt-6 md:pl-10">
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
		return (
			<>
				{/* image company */}
				<div
					className="mt-32 flex flex-col items-center divide-y-4 divide-x-0 divide-gray-600 divide-dashed text-center justify-center
					 md:items-start md:flex-row md:mt-40 md:divide-x-4 md:divide-y-0 mb-10"
				>
					<div className="w-56 flex flex-col items-center pb-10 md:w-2/5 md:pr-20 md:pb-0">
						<img src="/company.svg" className="md:h-56" />
						<Title level={2}>Industri IT</Title>
						<Text>
							Yuk lihat Industri-Industri IT Keren yang sudah
							berkontribusi untuk kota ini
						</Text>
					</div>

					{/* carousel companies */}
					<div className="w-56 pt-10 md:w-2/5 md:pl-20 md:pt-0">
						<Carousel autoplay={true}>
							{data.company.map((value) => (
								<div>
									<div className="h-40 w-40 m-auto flex flex-row items-center justify-center md:w-56 md:h-56">
										<img src={value.logo_url} />
									</div>
									<div>
										<Title level={2} className="text-black">
											{value.name}
										</Title>

										<Paragraph className="md:h-20">
											{value.description}
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
