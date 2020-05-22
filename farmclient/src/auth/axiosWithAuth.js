
import axios from 'axios';

export default () => {
    const token = localStorage.getItem('token');

    if (token === "undefined") {
        alert("WARNING. Making requests that might require auth while not logged in.");
    }

    return axios.create({
        baseURL: "http://localhost:9000/api/",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    });
};