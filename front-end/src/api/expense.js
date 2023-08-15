import axios from "axios";
import { getAuth } from "../utils/auth";
const headers = {
  "Content-Type": "application/json",
  "x-access-token": getAuth(),
};
export default axios.create({
  baseURL: "http://localhost:4000/",
  headers,
});
