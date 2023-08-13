import axios from "axios";
const headers = {
  "Content-Type": "application/json",
  "x-access-token": localStorage.getItem("token"),
};
export default axios.create({
  baseURL: "http://localhost:4000/",
  headers,
});
