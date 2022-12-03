import "./register.scss"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Social Media</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <span>Have you an account?</span>
                <Link to='/login'>
                    <button>Login</button>
               </Link>
            </div>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type='text' placeholder='Enter your full name'></input>
                    <input type='text' placeholder='Enter your username'></input>
                    <input type='email' placeholder='Enter your email'></input>
                    <input type='password' placeholder='Enter your password'></input>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register