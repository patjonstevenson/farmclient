import axios from "axios";
import baseURL from "./base_url";

export default axios.create({
    baseURL,
});