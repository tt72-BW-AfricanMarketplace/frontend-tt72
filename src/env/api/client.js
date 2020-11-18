import axios from "axios";

const client = {
	BASE_URL: "https://african--market.herokuapp.com/api/",
}
client.axios = () => {
	return axios.create({
		baseURL: "https://african--market.herokuapp.com/api/",
	});
};

const getProductById = async (id) => {
	const res = await client.axios().get(`products/${id}`);
	return res;
}
client.getProductById = getProductById;

const postProduct = async (id, product) => {
	const res = await client.axios().post(`products/${id}`, product);
	return res;
}
client.postProduct = postProduct;

const getAllProducts = async () => {
	const res = await client.axios().get("products");
	return res;
}
client.getAllProducts = getAllProducts;

export default client;