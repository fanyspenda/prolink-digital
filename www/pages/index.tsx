import Head from "next/head";
import Link from "next/link";
import { Card, Typography, Row, Col, Layout, Menu, Button } from "antd";
import {
	RiPencilRuler2Fill,
	RiMovie2Fill,
	RiFileCodeFill,
	RiGamepadFill,
	RiArrowDownSFill,
} from "react-icons/ri";
import { gql, useQuery } from "@apollo/client";
import styles from "styles/Home.module.css";
import FormRenderer from "components/form";
import { CategoriesDocument, CategoriesQuery } from "graphqlSchema/types";

export default function Home() {
	const { data, loading } = useQuery<CategoriesQuery>(CategoriesDocument);
	const { Meta } = Card;
	const { Title, Text } = Typography;

	const IconManager = (categoryName: string) => {
		if (categoryName == "animasi")
			return <RiMovie2Fill color="blue" size="100px" />;
		else if (categoryName == "aplikasi")
			return <RiFileCodeFill color="orange" size="100px" />;
		else if (categoryName == "desain")
			return <RiPencilRuler2Fill color="purple" size="100px" />;
		else if (categoryName == "gim")
			return <RiGamepadFill color="red" size="100px" />;
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
					<Link
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
					</Link>
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
			<Row
				align="middle"
				justify="center"
				style={{ marginTop: "450px", marginBottom: "100px" }}
			>
				<Col style={{ textAlign: "center" }}>
					<Title style={{ color: "white", fontSize: "50px" }}>
						Probolinggo{" "}
						<Text style={{ color: "#F9AE07" }}>Digital</Text>
					</Title>
					<Text style={{ color: "white" }}>
						kumpulan para penggiat industri IT Bayuangga
					</Text>
					<br />
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
					zIndex: 0,
				}}
			/>
		);
	};

	const MenuRenderer = () => {
		return (
			<Menu mode="horizontal" style={{ position: "relative" }}>
				<Menu.Item
					key="menu1"
					style={{ fontWeight: "bolder", fontSize: "20px" }}
				>
					Prolink <Text style={{ color: "#F9AE07" }}>Digital</Text>
				</Menu.Item>

				<Menu.Item style={{ float: "right" }}>Tentang Kami</Menu.Item>
			</Menu>
		);
	};

	return (
		<>
			<Head>
				<title>Prolink Digital</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				{backgroundRenderer()}
				{MenuRenderer()}
				{HeaderRenderer()}
				{/* {FormRenderer()} */}
				{/* {CardRenderer()} */}
			</Layout>
		</>
	);
}
