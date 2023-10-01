import css from '../signin/signin.css'
import logo from '../../assests/xlogo1.png'
import google from '../../assests/google.png'
import apple from '../../assests/apple.png'
import { Link, TextField } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react'
import { Signin } from '../../services/userservice'
import { useNavigate } from 'react-router-dom'



export const SignIn=({signinclose})=>{
    const[user, setUser]=useState({
        email:'',
        password:''
    })
    const [errorObj, setError]=useState({
        emailError:false,
        emailHelper:"",
        passwordError:false,
        passwordHelper:""
    })
    const handleUser=(event)=>{
        const{name, value}=event.target;
        setUser({...user, [name]:value}); 
    }
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(user.email)
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(user.password);
    
    const navigate=useNavigate();
    const handleSignin=async(event)=>{
        event.preventDefault();

        if(isEmailValid&&isPassValid){
            let response=await Signin(user)
            localStorage.setItem("token", response.data.data);
            if(localStorage.getItem('token')!=null){
                navigate('/twitter')
            }
        }
        setError((prevError)=>({
            ...prevError,
            emailError:!isEmailValid,
            emailHelper:!isEmailValid?'Email is not valid':"",
            passwordError:!isPassValid,
            passwordHelper:!isPassValid?'password is not valid':""
        }))
    }
    return(
        <div className="signup">
            <div style={{display:'flex'}}>
            <div id='icon1' onClick={signinclose}><CloseRoundedIcon ></CloseRoundedIcon></div>
            <img id='xlogo1'src={logo} alt='logo'></img></div>
            <div className="account1">
                <span id='xtext'>Sign in to X</span>
                    <button id='google'><img id='imglogo' src={google}></img> Sign up with Google</button>
                    <button id='apple'><img id='imglogo' src={apple}></img> Sign up with Apple</button>
                    <div className='or'><hr id='hr1' /><span id='spanor'>or</span><hr/></div>
                    <TextField id='text' variant='outlined' label='Phone, email, or username'inputProps={{style:{color:'white'}}} InputLabelProps={{style:{color:'grey'}}}
                    onChange={handleUser} value={user.email} name='email' error={errorObj.emailError} helperText={errorObj.emailHelper}
                    ></TextField>
                    <TextField id='text' variant='outlined' label='password'inputProps={{style:{color:'white'}}} InputLabelProps={{style:{color:'grey'}}}
                    onChange={handleUser} value={user.password} name='password' error={errorObj.passwordError} helperText={errorObj.passwordHelper}

                    ></TextField>

                <button id='signinacc1'onClick={handleSignin} >Next</button>
                <button id='create1'>Forget password?</button>
                <div style={{display:'flex'}}><p id='dont'>Don't have an account? </p><span id='stext'><Link> Sign up</Link></span></div>

                </div>
            </div>    
            
        )

}