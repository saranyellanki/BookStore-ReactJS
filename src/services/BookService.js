import AxiosService from "./AxiosService";

let baseURL = 'http://localhost:5050/api/v1/bookstore_user';

const axiosService = new AxiosService();

const header = {
  headers: {
    token: localStorage.getItem("token")
  }
}

class BookService {

  getAllBooks(){
    return axiosService.get(`${baseURL}/get/book`,header);
  }

}

export default BookService;