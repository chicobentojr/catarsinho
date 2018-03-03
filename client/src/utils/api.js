import axios from 'axios';
import { API_URL } from '../constants';

const instance = axios.create({
  baseURL: API_URL
});


const registerUser = (username, password) => {
  return instance.post('users/', {username, password});
  // return instance.get('users/');
}


export default {
  registerUser
}
