// import axios from 'axios'
// import collection from './collection';
// import { useRouter } from 'next/navigation';

// export default function createAxiosResponseInterceptor() {
//     const router =  useRouter()
//     const interceptor = axios.interceptors.response.use(
//         (response) => response,
//         async (error) => {
//             if (error.response.status !== 401) {
//                 return Promise.reject(error);
//             }
//             axios.interceptors.response.eject(interceptor);
//             return axios
//                 .post(collection.SERVER_AUTH_URL+"/refresh_token")
//                 .then(() => {
//                     return axios(error.response.config);
//                 })
//                 .catch((error2) => {
//                     router.push("/login");
//                     return Promise.reject(error2);
//                 })
//                 .finally(createAxiosResponseInterceptor);
//         }
//     );
// }
// createAxiosResponseInterceptor();