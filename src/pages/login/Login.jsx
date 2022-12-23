import "./login.scss"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const {login} = useContext(AuthContext);

    const loginHandler = () => {
        login();
    }
  return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hello World</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <span>Don't you have an account?</span>
               <Link to='/register'>
                    <button>Register</button>
               </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type='text' placeholder='Enter your username'></input>
                    <input type='password' placeholder='Enter your password'></input>
                    <button onClick={loginHandler}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login