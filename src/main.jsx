import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layouts/Root.jsx';
import Home from './layouts/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import Profile from './components/Profile.jsx';
import PrivateRoute from './Routes/Privateroute.jsx';
import DashBoard from './components/DashBoard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path:"/login", Component:Login},
      {path:"/register", Component:Register},
      {path:'/orders',
         element:<PrivateRoute>
          <Orders></Orders>
         </PrivateRoute>},
      {path:"/profile", Component:Profile},
      {
        path:'/dashBoard',
        element:<PrivateRoute>
          <DashBoard></DashBoard>
        </PrivateRoute>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
<RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
