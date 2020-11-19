import axios from "axios";

const client = {
	BASE_URL: "https://african--market.herokuapp.com/api/",
}



//................. AXIOS CREATORS ........................//
client.axios = () => {
	return axios.create({
		baseURL: client.BASE_URL,
	});
};

client.axiosAuth = () => {
	const token = window.localStorage.getItem("token");
	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: client.BASE_URL,
	});
};



//................. LOGIN & SIGN UP ........................//
client.login = async (userData) => {
	const res = await client.axios().post("auth/login", userData);
	return res;
};
// client.login = login;

client.signup = async (userData) => {
	const { email, password } = userData;
	const res = await client.axios().post("auth/register", { email, password });
	return res;
};



//................. USERS  ........................//
client.getAllUsers = async () => {
	const res = await client.axios().get("users/");
	return res;
};

client.getUser = async (userId) => {
	const res = await client.axios().get(`users/${userId}`);
	return res;
};

client.editUser = async (userId, user) => {
	const res = await client.axios().put(`users/${userId}`, user);
	return res;
}

client.deleteUser = async (userId) => {
	const res = await client.axios().delete(`users/${userId}`);
	return res;
};



//................. PRODUCTS ........................//
client.getAllCategories = async () => {
	const res = await client.axios().get("categories/");
	return res;
};

client.getAllItems = async () => {
	const res = await client.axios().get("items/");
	return res;
};

client.getItemsByProductName = async (productName) => {
	const res = await client.axios().get(`items/${productName}`);
	return res;
};

client.addItems = async (items) => {
	const res = await client.axios().post(`items/`, items);
	return res;
};

client.getAllProducts = async () => {
	const res = await client.axios().get("products/");
	return res;
};

client.getProductsByUserId = async (userId) => {
	const res = await client.axios().get(`products/${userId}`);
	return res;
};

client.addProductByUserId = async (userId, product) => {
	const res = await client.axios().post(`products/${userId}`, product);
	return res;
};

client.editProduct = async (userId, productId, product) => {
	const res = await client.axios().post(`products/${userId}/product/${productId}`, product);
	return res;
};

client.deleteProduct = async (userId, productId) => {
	const res = await client.axios().delete(`products/${userId}/product/${productId}`);
	return res;
}

export default client;