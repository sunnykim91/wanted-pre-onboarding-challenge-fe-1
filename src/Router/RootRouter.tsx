import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ROUTES from '../constants/ROUTES';
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import SingUpPage from '../pages/signup/SingUpPage';
import TodosPage from '../pages/todos/TodosPage';

function RootRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SingUpPage />} />
          <Route path={ROUTES.TODOS} element={<TodosPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RootRouter;
