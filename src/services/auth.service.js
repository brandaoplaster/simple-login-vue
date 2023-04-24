import { AXIOS_HTTP } from "../client/api";

class AuthService {
  login(user) {
    return AXIOS_HTTP
      .post('/auth/v1/user/sign_in', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.headers['access-token']) {
          localStorage.setItem('simple-login-user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('simple-login-user');
  }
}

export default new AuthService();
