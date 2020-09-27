import { Layout, Row, Col, Typography } from "antd";
import FormRenderer from "./form";
const { Title, Text, Paragraph } = Typography;

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
			<Row justify="center" className="mt-20 mb-5">
				<Col>
					<h1 className="text-center text-white font-bold text-4xl">
						Cari Industri
					</h1>
					<Text className="text-white">
						Yuk cari industri yang kamu inginkan
					</Text>
				</Col>
			</Row>
			<div>{FormRenderer()}</div>
		</Layout>
	);
};

export default StyledForm;
