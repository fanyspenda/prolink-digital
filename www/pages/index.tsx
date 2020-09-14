import Head from "next/head";
import Link from "next/link";
import { Card, Space, Input, Button, Form, Row, Col, Layout } from "antd";
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

	const CardRenderer = () => (
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

			{!loading && CardManager(data, ["blue", "orange", "purple", "red"])}
		</div>
	);

	const HeaderRenderer = () => (
		<div className={styles.pageHeader}>
			<h1>
				<b>Probolinggo Digital</b>
			</h1>
			<p style={{ fontSize: "20px", fontWeight: "lighter" }}>
				kumpulan para penggiat industri IT Bayuangga
			</p>
		</div>
	);

	return (
		<Layout className={styles.container}>
			<Head>
				<title>Prolink Digital</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Space direction="vertical">
				{HeaderRenderer()}
				{FormRenderer()}
				{CardRenderer()}
			</Space>
		</Layout>
	);
}
