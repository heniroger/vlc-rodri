import AppAxiosInstance from "./AxiosInstance";


export const getCars = async () => {
    return await AppAxiosInstance.get('/api/cars');
}


