import css from '../landingpage/landing.css'
import logo from '../../assests/xlogo.png'
import google from '../../assests/google.png'
import apple from '../../assests/apple.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SignIn } from '../signin/signin'
import { Signup } from '../signup/signup'


export const LandingPage = () => {
    const [signin, setSignin] = useState(false)
    const [signup, setSignup] = useState(false)


    const navigate = useNavigate()
    const handleSignin = () => {
        setSignin(!signin)

    }
    const handleCreate = () => {
        setSignup(!signup)
    }
    return (
        <div className='maindiv' {...signin ? { style: { backgroundColor: '#242d34' } } : ""} {...signup ? { style: { backgroundColor: '#242d34' } } : ""}>
            <div className="xlogo">
                <img src={logo} id='xlogo' alt='logo'></img>

            </div>
            <div className="dashboard">
                <p id='happening'>Happening now</p>
                <p id='join'>Join today.</p>
                <div className="account">
                    <button id='google'><img id='imglogo' src={google}></img> Sign up with Google</button>
                    <button id='apple'><img id='imglogo' src={apple}></img> Sign up with Apple</button>
                    <div className='or'><hr id='hr1' /><span id='spanor'>or</span><hr /></div>
                    <button id='create' onClick={handleCreate}>Create Account</button><span id='spantext'>By signing up, you agree to the <span id='spanblue'>Terms of Service</span> and  <span id='spanblue'>Privacy Policy,</span> including <span id='spanblue'>Cookie Use.</span></span>

                    <p id='already'>Already have an account?</p>
                    <button id='signinacc' onClick={handleSignin} >Sign in</button>
                </div>
            </div>
            <div style={{ position: 'absolute' }}> {signin ? <SignIn signinclose={handleSignin} /> : ""}</div>
            <div style={{ position: 'absolute' }}> {signup ? <Signup sigupclose={handleCreate} /> : ""}</div>
        </div>
    )
}