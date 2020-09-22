import { Layout, Row, Col, Typography } from "antd";
import FormRenderer from "./form";
const { Title, Text } = Typography;

const StyledForm = () => {
	return (
		<Layout>
			<Layout>
				<img
					src="/bg.png"
					style={{
						width: "100%",
						minHeight: "300px",
						maxHeight: "300px",
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
						Yuk cari industri yang kamu inginkan
					</Text>
				</Col>
			</Row>
			<div style={{ margin: "40px 30px 0px 30px" }}>{FormRenderer()}</div>
		</Layout>
	);
};

export default StyledForm;
