import apiClient from '../api/axiosConfig';
const STUDENTS_URL = '/students';
export const studentService = {
    // GET /api/students
    getAll: async () => {
        const response = await apiClient.get(STUDENTS_URL);
        return response.data;
    },
    // GET /api/students/{id}
    getById: async (id) => {
        const response = await apiClient.get(`${STUDENTS_URL}/${id}`);
        return response.data;
    },
    // POST /api/students
    create: async (student) => {
        const response = await apiClient.post(STUDENTS_URL, student);
        return response.data;
    },
    // PUT /api/students/{id}
    update: async (id, student) => {
        const response = await apiClient.put(`${STUDENTS_URL}/${id}`, student);
        return response.data;
    },
    // DELETE /api/students/{id}
    delete: async (id) => {
        await apiClient.delete(`${STUDENTS_URL}/${id}`);
    }
};