import { createContext, Dispatch, SetStateAction } from "react";

type defaultType = {
	user: {
		id: string;
		role: string;
	};
	setter: Dispatch<SetStateAction<{ id: string; role: string }>>;
};

export const defaultValue: defaultType = {
	user: {
		id: "id",
		role: "role",
	},
	setter: () => {},
};

export const userContext = createContext(defaultValue);
