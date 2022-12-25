import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Checkout from "./components/checkout"

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/stemkits_website",
    element: <div><App /></div>,
  },
  {
    path : "stemkits_website/checkout",
    element : <div><Checkout /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
