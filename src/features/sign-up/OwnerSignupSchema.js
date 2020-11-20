import * as yup from "yup";

export default yup.object().shape({
	username: yup
		.string()
		.required("username is required")
		.min(6, "username must be 6 chars long"),
	email: yup
		.string()
		.email("Must be valid email address")
		.required("Must include email address"),
	password: yup
		.string()
		.required("Password is required")
		.min(6, "Password must be 6 Characters long"),
	companyName: yup.string()
});