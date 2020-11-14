import axios from 'axios';

// do something like axiosWithSecret('/login'
// grant_type=password&username=admin&password=admin )
export function axiosSecret() {
	const clientID = 'WhyDidTheFunctionsStopCallingEachother';
	const clientSecret = 'TheyHadConstantArguments';
	const auth = window.btoa(clientID + ':' + clientSecret);
	return axios.create({
		headers: {
			Authorization: 'Basic ' + auth,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		baseURL: "http://localhost:5000/"
	});
}
