import { companyType } from "types/company";
import { List, Space } from "antd";
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

export const ListRenderer = (companies: companyType[], totalData: number) => {
	return (
		<div>
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
						style={{ background: "white" }}
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
		</div>
	);
};
