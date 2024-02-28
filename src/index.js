import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Aim from './pages/Aim';
import ErrorPage from './pages/ErrorPage';
import Theory from './pages/Theory';
import Procedure from './pages/Procedure';
import Simulation from './pages/Simulation';
import Quiz from './pages/Quiz';
import Assignment from './pages/Assignment';
import Feedback from './pages/Feedback';
import References from './pages/References';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aim",
    element: <Aim />,
  },
  {
    path: "/theory",
    element: <Theory />,
  },
  {
    path: "/procedure",
    element: <Procedure />,
  },
  {
    path: "/simulation",
    element: <Simulation />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/references",
    element: <References />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

