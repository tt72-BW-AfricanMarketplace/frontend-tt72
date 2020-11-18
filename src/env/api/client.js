import axios from "axios";

const client = {
	BASE_URL: "https://african--market.herokuapp.com/api/",
}
client.axios = () => {
	return axios.create({
		baseURL: "https://african--market.herokuapp.com/api/",
	});
};

//................. LOGIN & SIGN UP ........................//
const login = async (email, password) => {
	const res = await client.axios().post("auth/login", { email, password });
	return res;
};
client.login = login;

const signup = async (username, email, password) => {
	const res = await client.axios().post("auth/register",
		{
			username: username ?? undefined,
			email,
			password,
		}
	);
	return res;
};
client.signup = signup;


//................. USERS  ........................//
client.getAllUsers = async () => {
	const res = await client.axios().get("users/");
	return res;
};

client.getUserById = async (id) => {
	const res = await client.axios().get(`users/${id}`);
	return res;
};

client.editUserById = async (id, user) => {
	const res = await client.axios().put(`users/${id}`, user);
	return res;
}

client.deleteUserById = async (id) => {
	const res = await client.axios().delete(`users/${id}`);
	return res;
};




//................. PRODUCTS ........................//
client.getItemsByProductId = async (productId) => {
	const res = await client.axios().get(`items/${productId}`);
	return res;
};

client.editAllItems = async (items) => {
	const res = await client.axios().post(`items/`, items);
	return res;
}

client.getProductsByUserId = async (id) => {
	const res = await client.axios().get(`products/${id}`);
	return res;
}

client.addProductByUserId = async (id, product) => {
	const res = await client.axios().post(`products/${id}`, product);
	return res;
}

client.editProduct = async (userId, productId, product) => {
	const res = await client.axios().post(`products/${userId}/product/${productId}`, product);
	return res;
}

export default client;