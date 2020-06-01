// handle authentication
const authProvider = {
  login: ({ phone, password }) => {
    const url = process.env.REACT_APP_HEROKU + '/auth/login';

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify({ phone, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Wrong information. Please try again!');
        }
        return response.json();
      })
      .then(({ token }) => {
        sessionStorage.setItem('token', token);
      });
  },
  logout: () => {
    sessionStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      sessionStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    // check for a token
    return sessionStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve()
};

export default authProvider;
