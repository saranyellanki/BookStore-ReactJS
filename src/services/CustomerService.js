import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://localhost:5050/api/v1/bookstore_user';

const header = {
  headers : {
    token: localStorage.getItem("token")
  }
}

class CustomerService {

  addCustomer(data) {
    return axiosService.put(`${baseURL}/edit_user`, data, header)
  }

}

export default CustomerService;