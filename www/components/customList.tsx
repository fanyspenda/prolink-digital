// import { companyType } from "types/company";
import { List, Space, Layout, Card, Image } from "antd";
import { RiPhoneFill, RiBuilding2Fill } from "react-icons/ri";
import { Company } from "graphqlSchema/types";

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
	companies: Company[],
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

			{companies.map((company) => (
				<Card className="flex flex-row items-center h-40 bg-white shadow-md m-2 rounded-lg border-2 border-white hover:border-orange-300">
					<div className="w-32 flex-row items-center">
						<img
							src={company.logo_url || "/companyLogo/default.png"}
						/>
					</div>
				</Card>
			))}
		</Layout>
	);
};
