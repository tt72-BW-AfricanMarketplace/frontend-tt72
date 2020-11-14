import axios from "axios";

export const axiosAuth = () => {
	const token = window.localStorage.getItem("token");
	return axios.create({
		headers: {
			Authorization: token,
		},
		baseURL: "http://localhost:5000/api", //TODO: ADD BASE URL
	});
}

export default axiosAuth;