import Head from "next/head";
import { Card, Space } from "antd";
import {
	RiPencilRuler2Fill,
	RiMovie2Fill,
	RiFileCodeFill,
	RiGamepadFill,
} from "react-icons/ri";
import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";
const { Meta } = Card;

type categoryType = {
	id: number;
	name: string;
};

type categoriesType = {
	category: categoryType[];
};

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

	const iconManager = (categoryName: string) => {
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
			<Card
				cover={iconManager(value.name)}
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
		));
		return cards;
	};

	const CardRenderer = () => (
		<div style={{ marginTop: "100px" }}>
			<Space size="large">
				{!loading &&
					CardManager(data, ["blue", "orange", "purple", "red"])}
			</Space>
		</div>
	);

	const HeaderRenderer = () => (
		<div className={styles.pageHeader}>
			<h1>
				<b>Probolinggo Digital</b>
			</h1>
			<p style={{ fontSize: "20px" }}>
				The community of Bayuangga Developer
			</p>
		</div>
	);

	return (
		<div className={styles.container}>
			<Head>
				<title>Prolink Digital</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Space direction="vertical">
				{HeaderRenderer()}
				{CardRenderer()}
			</Space>
		</div>
	);
}
