import css from '../signin/signin.css'
import logo from '../../assests/xlogo1.png'
import google from '../../assests/google.png'
import apple from '../../assests/apple.png'
import { Link, TextField } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react'



export const SignIn=({signinclose})=>{
   
    
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
                    <TextField id='text' variant='outlined' label='Phone, email, or username'inputProps={{style:{color:'white'}}} InputLabelProps={{style:{color:'grey'}}}></TextField>
            
                <button id='signinacc1'>Next</button>
                <button id='create1'>Forget password?</button>
                <div style={{display:'flex'}}><p id='dont'>Don't have an account? </p><span id='stext'><Link> Sign up</Link></span></div>

                </div>
            </div>    
            
        )

}