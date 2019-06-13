import axios from "axios";

axios.default.baseURL = "";
axios.default.timeout = 5000;

//request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errCode == 2) {
      router.push({
        path: "/home",
        querry: {
          redirect: router.currentRoute.fullPath
        } //从哪个页面跳转
      });
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function patch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function remove(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function put(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
