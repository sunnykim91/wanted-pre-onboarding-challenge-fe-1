import { DEFAULT_URL } from '../config';
import axios from 'axios';

class api {
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
    // FIXME: 로컬 스토리지로 수정
    const token = '';
    return axios.get(url, {
      headers: {
        Authorization: token,
      },
    });
  };

  static getTodoById = (id: string) => {
    const url = `${DEFAULT_URL}/todos/:${id}`;
    // FIXME: 로컬 스토리지로 수정
    const token = '';
    return axios.post(url, {
      headers: {
        Authorization: token,
      },
    });
  };

  static createTodo = (title: string, content: string) => {
    const url = `${DEFAULT_URL}/todos`;
    const params = {
      title,
      content,
    };
    // FIXME: 로컬 스토리지로 수정
    const token = '';
    return axios.post(url, {
      headers: {
        Authorization: token,
      },
      params,
    });
  };

  static updateTodo = (id: string, title: string, content: string) => {
    const url = `${DEFAULT_URL}/todos/:${id}`;
    const params = {
      title,
      content,
    };
    // FIXME: 로컬 스토리지로 수정
    const token = '';
    return axios.put(url, {
      headers: {
        Authorization: token,
      },
      params,
    });
  };

  static deleteTodo = (id: string) => {
    const url = `${DEFAULT_URL}/todos/:${id}`;
    // FIXME: 로컬 스토리지로 수정
    const token = '';
    return axios.post(url, {
      headers: {
        Authorization: token,
      },
    });
  };
}

export default api;
