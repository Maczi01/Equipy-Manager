import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
export const CatchData = {
    getUsers: async () => {
        // const response = await axios.get(`${BASE_URL}/users`);
        const response = await axios.get("http://localhost:8080/api/users");
        return response.data;
    },
    addUser: async (user) => {
        const response = await axios.post("http://localhost:8080/api/users", user);
        return response.data;
    },
    addEquipy: async (equipy) => {
        const response = await axios.post("http://localhost:8080/api/assets", equipy);
        return response.data;
    },



    getEquipy: async () => {
        // const response = await axios.get(`${BASE_URL}/assets`);
        const response = await axios.get("http://localhost:8080/api/assets");
        return response.data;
    }
}
