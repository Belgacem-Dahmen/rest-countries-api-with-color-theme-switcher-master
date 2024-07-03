import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,

} from "react-router-dom";
import CountryList from './components/CountryList/CountryList.jsx';
import CountryPage from '../Pages/CountryPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<CountryList />} />
      <Route path="country/:name" element={<CountryPage />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
