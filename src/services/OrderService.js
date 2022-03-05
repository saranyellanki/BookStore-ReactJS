import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://localhost:5050/api/v1/bookstore_user';

const header = {
  headers : {
    token: localStorage.getItem("token")
  }
}

class OrderService {
  addToOrders(){
    return axiosService.post(`${baseURL}/add/user`,'',header);
  }
}

export default OrderService;