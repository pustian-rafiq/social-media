
import './App.css';
import Login from './pages/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from './pages/register/Register';
import ProfilePage from './pages/profile/ProfilePage';
import Navbar from './components/navbar/Navbar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar'
import HomePage from './pages/homepage/HomePage';
import "./style.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

const Layout = () => {

  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar/>
      <div style={{display: 'flex'}}>
        <LeftBar/>
        <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        <RightBar/>
      </div>
    </div>
  );
}

function App() {

  //Declare protected routes
  const ProtectedRoute = ({children}) => {
    let currentUser = true;
    if(!currentUser){
      return <Navigate to='/login' />
    }else{
      return children;
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <ProtectedRoute>
         <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/profile/:id",
          element: <ProfilePage />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div >
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
