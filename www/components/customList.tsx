// import { companyType } from "types/company";
import { Space, Layout, Card, Image, Typography } from "antd";
import { RiPhoneLine, RiBuilding2Line } from "react-icons/ri";
import { Company, Category } from "graphqlSchema/types";

// const AddressRenderer = (text: string) => {
// 	return (
// 		<Space>
// 			<RiBuilding2Fill />
// 			{text}
// 		</Space>
// 	);
// };

// const ContactRenderer = (text: string) => {
// 	return (
// 		<Space>
// 			<RiPhoneFill />
// 			{text}
// 		</Space>
// 	);
// };

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
				<div
					className="flex flex-row flex-wrap md:flex-no-wrap justify-center
				items-center h-auto bg-white 
				shadow-md m-2 p-2 rounded-lg border-2 
				border-white md:justify-start hover:border-orange-300"
				>
					<div className="w-32 h-32 overflow-hidden flex items-center justify-center">
						<Image
							preview={false}
							src={company.logo_url || "/companyLogo/default.png"}
						/>
					</div>
					<div className="w-full h-auto flex flex-wrap flex-row justify-between">
						<div className="flex flex-col flex-wrap justify-between w-auto pl-2">
							<Title level={4}>{company.name}</Title>
							<Paragraph className="text-gray-600">
								{company.category.name}
							</Paragraph>
							<Paragraph
								ellipsis={{
									rows: 2,
								}}
							>
								{company.description}
							</Paragraph>
						</div>

						<div className="float-right flex flex-col justify-between w-48 ml-2 text-gray-600">
							<div className="flex flex-row  items-center">
								<RiBuilding2Line />
								<p className="ml-2">{company.address}</p>
							</div>

							<div className="flex flex-row items-center">
								<RiPhoneLine />
								<p className="ml-2">{company.contact}</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</Layout>
	);
};
