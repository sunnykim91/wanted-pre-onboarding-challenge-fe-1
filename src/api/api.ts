import { DEFAULT_URL } from '../config';
import axios from 'axios';
class api {
  static checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  static login = (email: string, password: string) => {
    const url = `${DEFAULT_URL}/users/login`;
    const params = {
      email: email,
      password: password,
    };
    return axios.post(url, params);
  };

  static signup = (email: string, password: string) => {
    const url = `${DEFAULT_URL}/users/create`;
    const params = {
      email: email,
      password: password,
    };
    return axios.post(url, params);
  };

  static getTodos = () => {
    const url = `${DEFAULT_URL}/todos`;
    if (this.checkToken()) {
      const token = localStorage.getItem('token');
      return axios.get(url, {
        headers: {
          Authorization: token,
        },
      });
    } else {
      throw new Error('token expired');
    }
  };

  static getTodoById = (id: string) => {
    const url = `${DEFAULT_URL}/todos/:${id}`;
    if (this.checkToken()) {
      const token = localStorage.getItem('token');
      return axios.post(url, {
        headers: {
          Authorization: token,
        },
      });
    } else {
      throw new Error('token expired');
    }
  };

  static createTodo = (title: string, content: string) => {
    const url = `${DEFAULT_URL}/todos`;
    const params = {
      title: title,
      content: content,
    };
    if (this.checkToken()) {
      const token = localStorage.getItem('token');
      return axios.post(url, params, {
        headers: {
          Authorization: token,
        },
      });
    } else {
      throw new Error('token expired');
    }
  };

  static updateTodo = (id: string, title: string, content: string) => {
    const url = `${DEFAULT_URL}/todos/${id}`;
    const params = {
      title,
      content,
    };
    if (this.checkToken()) {
      const token = localStorage.getItem('token');
      return axios.put(url, params, {
        headers: {
          Authorization: token,
        },
      });
    } else {
      throw new Error('token expired');
    }
  };

  static deleteTodo = (id: string) => {
    const url = `${DEFAULT_URL}/todos/${id}`;
    if (this.checkToken()) {
      const token = localStorage.getItem('token');
      return axios.delete(url, {
        headers: {
          Authorization: token,
        },
      });
    } else {
      throw new Error('token expired');
    }
  };
}

export default api;
