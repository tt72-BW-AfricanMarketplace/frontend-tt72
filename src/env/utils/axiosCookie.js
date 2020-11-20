// import axios from "axios";

// const setJwt = (tok) => {
// 	console.log(tok);
// }
// export const getJwt = async () => {
// 	const { data } = await axios.get(`/jwt`);
// 	setJwt(data.token);
// }

// FOR BACKEND — in server.js
// app.get('/jwt', (req, res) => {
//   const token = jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret);
//   res.cookie('token', token, { httpOnly: true });
//   res.json({ token });
// });

//server.js
// server.js
// app.use(cookieParser());
// app.use(
//   jwt({
//     secret: 'secret123',
//     getToken: req => req.cookies.token
//   })
// );