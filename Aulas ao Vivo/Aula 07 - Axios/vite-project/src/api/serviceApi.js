import axios from "axios";

const API = axios.create({ 
    baseURL: import.meta.env.VITE_API_BASE_URL 
});

export const getUsers = () => API.get("/usuarios");
export const getUserById = (id) => API.get(`/usuario/${id}`);
export const createUser = (data) => API.post("/usuarios", data);
export const updateUser = (id, data) => API.put(`/usuarios/${id}`, data);
export const deleteUser = (id) => API.delete(`/usuarios/${id}`);

export const login = (data) => API.post("/login", data);