import axios from "axios";


const axiosUser = axios.create({
    baseURL: 'https://plan-fusion-backend-nine.vercel.app',
    withCredentials: true

})

const useAxiosUser = () => {
    return axiosUser
};

export default useAxiosUser;