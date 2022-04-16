import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from '../views/HOC/main_layout';
import routes from './routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {
          routes.map((val, idx) => {
            return (
              <Route key={idx} index element={<val.component />} />
            )
          })
        }
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
