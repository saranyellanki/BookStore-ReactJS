import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://localhost:5050/api/v1/bookstore_user';

const header = {
  headers : {
    token: localStorage.getItem("token")
  }
}

class UserService {
  Signup(data){
    return axiosService.post(`${baseURL}/registration`,data);
  }

  Signin(data){
    return axiosService.post(`${baseURL}/login`,data)
  }

  forgotPass(data){
    return axiosService.post(`${baseURL}/forgetPassword`,data)
  }

  ResetPassword(data){
    return axiosService.put(`${baseURL}/resetPassword`,data, header)
  }

}

export default UserService;