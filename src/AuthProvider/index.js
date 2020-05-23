const authProvider = {
  login: ({ username, password }) => {
    const request = new Request('https://pulani2.herokuapp.com', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem('token', token);
      });
  },
  // ...
  logout: () => Promise.resolve(),
  checkAuth: () => Promise.resolve(),
  checkError: () => Promise.resolve(),
  getPermissions: () => Promise.resolve()
};

export default authProvider;
