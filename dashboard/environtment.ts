export const AUTH0_DOMAIN = "dev-i7afx3za.au.auth0.com";
export const AUTH0_CLIENT_ID = "KI2sD2pKaKpg05884DefbP4MMpX94gCi";
export const HASURA_GRAPHQL = "https://vital-liger-80.hasura.app/v1/graphql";
export const BASE_URL = "https://prolink-digital-dashboard.vercel.app/";
// export const BASE_URL = "http://localhost:4000/";
export const CLOUDINARY_UPLOAD_URL =
	"https://api.cloudinary.com/v1_1/dceo8gpwh/image/upload";

export const hasuraHeader = (id: string, role: string) => ({
	headers: {
		"X-Hasura-User-Id": id,
		"x-hasura-role": role,
	},
});
