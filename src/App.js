
import './App.css';
import Login from './pages/login/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from './pages/register/Register';

function App() {
  const router = createBrowserRouter([
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
