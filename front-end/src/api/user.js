import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};
export default axios.create({
  baseURL: "https://expense-tracker-backend-7xzy.onrender.com/",
  headers,
});
