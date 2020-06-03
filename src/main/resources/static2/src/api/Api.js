import axios from "axios";

const BASE_URL = "http://localhost:8080/api";
export const Users = {
    getUsers: async () => {
        const response = await axios.get(`${BASE_URL}/users`);
        // const response = await axios.get("http://localhost:8080/api/users");
        return response.data;
    },
    addUser: async (user) => {
        const response = await axios.post(`${BASE_URL}/users`, user);
        return response.data;
    },

    editUser: async (userToUpdate) => {
        if (!userToUpdate.id) {
            throw new Error("This timebox haven't id!")
        }
        const response = await axios.put(`${BASE_URL}/users/${userToUpdate.id}`, userToUpdate)
        return response.data;
    },
    deleteUser: async (userToRemove) => {
        await axios.delete(`${BASE_URL}/users/${userToRemove.id}`)
    },

};


export const Equipy = {
    getEquipy: async () => {
        const response = await axios.get(`${BASE_URL}/assets`);
        return response.data;
    },

    addEquipy: async (equipy) => {
        const response = await axios.post(`${BASE_URL}/assets`, equipy);
        return response.data;
    },
    editAsset: async (assetToUpdate) => {
        if (!assetToUpdate.id) {
            throw new Error("This timebox haven't id!")
        }
        const response = await axios.put(`${BASE_URL}/assets/${assetToUpdate.id}`, assetToUpdate)
        return response.data;
    },

    deleteAsset: async (assetToRemove) => {
        await axios.delete(`${BASE_URL}/assets/${assetToRemove.id}`)
    },
}
export const Assignment = {
    getUsers: async (id) => {
        const response = await axios.get(`${BASE_URL}/users/${id}/assignments`);
        return response.data;
    },
}