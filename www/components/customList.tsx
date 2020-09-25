// import { companyType } from "types/company";
import { Space, Layout, Card, Image, Typography } from "antd";
import { RiPhoneFill, RiBuilding2Fill } from "react-icons/ri";
import { Company, Category } from "graphqlSchema/types";

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

type arrayCompany = Omit<Company, "id" | "category_id" | "category"> & {
	category: Pick<Category, "name" | "__typename">;
};

export const ListRenderer = (
	// companies: companyType[],
	companies: arrayCompany[],
	totalData: number,
	searchKey: string
) => {
	const { Title, Paragraph } = Typography;
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

			{companies.map((company) => (
				<div className="flex flex-row items-center h-40 bg-white shadow-md m-2 p-2 rounded-lg border-2 border-white hover:border-orange-300">
					<div className="w-32 h-32 overflow-hidden flex items-center justify-center border-4">
						<Image
							preview={false}
							src={company.logo_url || "/companyLogo/default.png"}
						/>
					</div>
					<div className="w-full h-32 border-2 border-red-600 flex flex-row justify-between">
						<div className="flex flex-col justify-between w-48 pl-2 border-4">
							<Title level={4}>{company.name}</Title>
							<Paragraph className="text-gray-600">
								{company.category.name}
							</Paragraph>
						</div>

						<div className="float-right flex flex-col justify-between w-48 border-4">
							<Paragraph>{company.address}</Paragraph>
							<Paragraph>{company.contact}</Paragraph>
						</div>

						<div className="float-right flex flex-col justify-between w-48 border-4">
							<Paragraph>{company.address}</Paragraph>
							<Paragraph>{company.contact}</Paragraph>
						</div>
					</div>
				</div>
			))}
		</Layout>
	);
};
