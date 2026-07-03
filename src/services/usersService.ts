import { api } from "./api";

export const usersService = {
    getAll: () => api.get("/users"),
    create: (data: any) => api.post("/users", data),
};
