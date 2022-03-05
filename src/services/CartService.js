import AxiosService from "./AxiosService";

const axiosService = new AxiosService();

let baseURL = 'http://localhost:5050/api/v1/bookstore_user';

const header = {
  headers : {
    token: localStorage.getItem("token")
  }
}

class CartService {
  addToCart(data){
    return axiosService.post(`${baseURL}/add_cart_item/${data._id}`,'',header);
  }

  getCart(){
    return axiosService.get(`${baseURL}/get_cart_items`,header);
  }

  updateCart(data) {
    return axiosService.put(`${baseURL}/cart_item_quantity/${data._id}`,data,header)
  }

  deleteItem(data){
    return axiosService.delete(`${baseURL}/remove_cart_item/${data}`,header)
  }
}

export default CartService;