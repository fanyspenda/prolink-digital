import Head from "next/head";
import Link from "next/link";
import { Card, Space, Input, Button, Form, Row, Col } from "antd";
import {
	RiPencilRuler2Fill,
	RiMovie2Fill,
	RiFileCodeFill,
	RiGamepadFill,
	RiArrowDownSFill,
} from "react-icons/ri";
import { gql, useQuery } from "@apollo/client";
import { categoriesType } from "types/category";
import styles from "styles/Home.module.css";

const Q_GET_CATEGORIES = gql`
	query {
		category {
			id
			name
		}
	}
`;

export default function Home() {
	const { data, loading } = useQuery<categoriesType>(Q_GET_CATEGORIES);
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

	const CardManager = (categories: categoriesType, colors: string[]) => {
		const cards = categories.category.map((value, index) => (
			<Link href="/category/[result]" as={`/category/${value.id}`}>
				<Card
					cover={IconManager(value.name)}
					bordered
					hoverable
					style={{
						width: 300,
						padding: "10px",
						border: `3px solid ${colors[index]}`,
						borderRadius: "15px",
					}}
				>
					<Meta title={<b>{value.name}</b>} />
				</Card>
			</Link>
		));
		return cards;
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
					marginBottom: "0px",
					fontWeight: "lighter",
				}}
			>
				atau klik kategori di bawah
			</p>
			<RiArrowDownSFill
				color="blue"
				size="20px"
				style={{ marginBottom: "10px" }}
			/>
			<br />
			<Space size="large">
				{!loading &&
					CardManager(data, ["blue", "orange", "purple", "red"])}
			</Space>
		</div>
	);

	const HeaderRenderer = () => (
		<div className={styles.pageHeader} style={{ background: "white" }}>
			<h1>
				<b>Probolinggo Digital</b>
			</h1>
			<p style={{ fontSize: "20px", fontWeight: "lighter" }}>
				kumpulan para penggiat industri IT Bayuangga
			</p>
		</div>
	);

	const FormRenderer = () => (
		<Form style={{ marginTop: "80px" }}>
			<Row>
				<Col span={16}>
					<Form.Item
						name="searchContext"
						style={{ marginRight: "10px" }}
					>
						<Input
							size="large"
							placeholder="para tretan, monggo cari para penggiat teknologi di sini.."
						/>
					</Form.Item>
				</Col>
				<Col span={8}>
					<Button block type="primary" size="large">
						Cari
					</Button>
				</Col>
			</Row>
		</Form>
	);

	return (
		<div className={styles.container}>
			<Head>
				<title>Prolink Digital</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Space direction="vertical">
				{HeaderRenderer()}
				{FormRenderer()}
				{CardRenderer()}
			</Space>
		</div>
	);
}
