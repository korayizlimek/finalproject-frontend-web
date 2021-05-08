import axios from "axios";

export function api() {
    return axios.create({
        baseUrl: "http://localhost:5000/api",
    });
}

// api adresi degirisirse burayi da degistirecegiz
