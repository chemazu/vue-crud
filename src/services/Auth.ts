import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const registerUser = async (user: {
  email: string;
  password: string;
  name: string;
}) => {
  const response = await axios.post("/api/account/register", user);
  return response.data;
};
export { registerUser };
