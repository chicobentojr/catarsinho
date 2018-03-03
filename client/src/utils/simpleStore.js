let user = {
  username: localStorage.username,
  isAuthenticated: localStorage.isAuthenticated,
  token: localStorage.token
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
