import axios from "axios";

const client = {
	BASE_URL: "https://african--market.herokuapp.com/api/",
}



//................. AXIOS CREATORS ........................//
client.axios = () => {
	return axios.create({
		// baseURL: "https://african--market.herokuapp.com/api/",
		baseURL: client.BASE_URL,
	});
};



//................. LOGIN & SIGN UP ........................//
client.login = async (email, password) => {
	const res = await client.axios().post("auth/login", { email, password });
	return res;
};

client.signup = async (username, email, password) => {
	const res = await client.axios().post("auth/register",
		{
			username: username ?? undefined,
			email,
			password,
		}
	);
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
client.getItemsByProductId = async (productId) => {
	const res = await client.axios().get(`items/${productId}`);
	return res;
};

client.addItems = async (items) => {
	const res = await client.axios().post(`items/`, items);
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

export default client;