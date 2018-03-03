let user = {
  username: localStorage.username && localStorage.username !== "null" ? localStorage.username : '',
  isAuthenticated: localStorage.isAuthenticated && localStorage.isAuthenticated !== "null" ? localStorage.isAuthenticated : false,
  token: localStorage.token && localStorage.token !== "null" ? localStorage.token : ''
}

const setUser = (username, token) => {
  user.username = username;
  user.token = token;
  user.isAuthenticated = username ? true : false;
  localStorage.setItem('username', username)
  localStorage.setItem('token', token)
  localStorage.setItem('isAuthenticated', user.isAuthenticated)
}

export default {
  user,
  setUser
}
