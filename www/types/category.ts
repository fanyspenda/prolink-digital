import { companyType } from "./company";

export type categoryType = {
	id: number;
	name: string;
	companies: companyType[];
};

export type categoriesType = {
	category: categoryType[];
};
