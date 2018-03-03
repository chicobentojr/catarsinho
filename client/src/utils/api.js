import axios from 'axios';
import { API_URL } from '../constants';
import simpleStore from './simpleStore'

let instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': localStorage.token ? `JWT ${localStorage.token}` : ''
  }
});

const setToken = (token) => {
  if (token) {
    Object.assign(instance.defaults, {
      headers: {
        'Authorization': `JWT ${token}`
      }
    })
  }
}

const registerUser = (username, password) => {
  return instance.post('users/', {username, password});
}

const authUser = (username, password) => {
  return new Promise((resolve, reject) => {
    instance.post('auth/', {username, password}).then((response) => {
      setToken(response.data.token || '')
      simpleStore.setUser(username, response.data.token)
      resolve(response)
    }).catch((error) => {
      reject(error)
    });
  })
}

const logoutUser = () => {
  setToken(null)
  simpleStore.setUser(null, null)
}

const loadUserProjects = () => instance.get('myprojects/');
const loadProjects = () => instance.get('projects/');
const loadProject = (id) => instance.get(`projects/${id}`);

const createProject = (project) => {
  return instance.post('projects/', {...project});
}

const updateProject = (id, project) => {
  return instance.put(`projects/${id}/`, {...project});
}

export default {
  registerUser,
  authUser,
  loadUserProjects,
  logoutUser,
  loadProjects,
  createProject,
  loadProject,
  updateProject
}
