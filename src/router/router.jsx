
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/landingpage/landing'
import { SignIn } from '../pages/signin/signin'
import { Signup } from '../pages/signup/signup'
import { TwitterDashboard } from '../components/dashboard'
export const Router = () => {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}></Route>
                    <Route path='/signin' element={<SignIn />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/twitter' element={<TwitterDashboard />}></Route>


                </Routes>
            </BrowserRouter>

        </div>
    )
}