import axios from 'axios';
import baseURL from "./base_url";

export default () => {
    const token = localStorage.getItem('token');

    if (token === "undefined") {
        alert("WARNING. Making requests that might require auth while not logged in.");
    }

    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};