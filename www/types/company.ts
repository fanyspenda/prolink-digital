import { categoryType } from "./category";

export type companyType = {
	id: number;
	name: string;
	description: string;
	address: string;
	contact: string;
	category: categoryType[];
};
