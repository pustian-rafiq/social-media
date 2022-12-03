import "./login.scss"
import {Link} from "react-router-dom"
const Login = () => {
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
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login