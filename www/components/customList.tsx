// import { companyType } from "types/company";
import { List, Space, Layout } from "antd";
import { RiPhoneFill, RiBuilding2Fill } from "react-icons/ri";

const AddressRenderer = (text: string) => {
	return (
		<Space>
			<RiBuilding2Fill />
			{text}
		</Space>
	);
};

const ContactRenderer = (text: string) => {
	return (
		<Space>
			<RiPhoneFill />
			{text}
		</Space>
	);
};

export const ListRenderer = (
	// companies: companyType[],
	companies: any[],
	totalData: number,
	searchKey: string
) => {
	return (
		<Layout
			style={{
				background: "white",
			}}
		>
			<div>
				<h1>Anda Mencari "{searchKey}"</h1>
			</div>
			<p>
				menampilkan <b style={{ fontWeight: "bold" }}>{totalData}</b>{" "}
				hasil :
			</p>

			<List
				size="large"
				itemLayout="vertical"
				dataSource={companies}
				renderItem={(company) => (
					<List.Item
						style={{
							background: "white",
							border: "2px solid #F9AE07",
							borderRight: "none",
							borderLeft: "none",
							borderBottom: "none",
						}}
						actions={[
							AddressRenderer(company.address),
							ContactRenderer(company.contact),
						]}
					>
						<List.Item.Meta
							title={
								<b style={{ fontSize: "20px" }}>
									{company.name}
								</b>
							}
							description={company.category.name}
						/>
						{company.description}
					</List.Item>
				)}
			/>
		</Layout>
	);
};
