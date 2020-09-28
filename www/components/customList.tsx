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
				shadow-md m-2 p-10 rounded-lg border-2 
				border-white md:justify-start hover:border-orange-300"
				>
					<div
						className="flex-1 overflow-hidden flex items-center justify-center"
						style={{
							flex: 1,
						}}
					>
						<Image
							className="w-full"
							preview={false}
							src={company.logo_url || "/companyLogo/default.png"}
						/>
					</div>

					<div
						className="flex flex-col flex-wrap justify-between max-w-4xl pl-8"
						style={{
							flex: 3,
						}}
					>
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

					<div className="float-right flex flex-1 flex-col justify-between  ml-2 text-gray-600">
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
			))}
		</Layout>
	);
};
