import csss from '../signup/signup.css'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import { Register, Registration } from '../../services/userservice';


export const Signup = ({ sigupclose }) => {

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const days=Array.from({length:31},(value, i)=>i+1)
    const years=Array.from({length:70},(value, i)=>1950+i);

    const [user, setUser] = useState({
        firstName: '',
        email: '',
        password: '',
    })

    const [errorObject, setError]=useState({
        fullNameError:false,
        fullNameHelper:'',
        mobilenumberError:false,
        mobilenumberHelper:"",
        passwordError:false,
        passwordHelper:""
    })
        
    const handleUser = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }
    console.log(user)

    const isFNameValid = /^[a-zA-Z ]{2,30}$/.test(user.firstName);
    const isPassValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(user.password);
    const isEmailValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(user.email)


    const hadleSignup=async(event)=>{
        event.preventDefault();
        if(isFNameValid&&isEmailValid&&isPassValid){
        let response=await Registration(user);
        console.log("----------",response);
        }
        setError((prevError)=>({
            ...prevError,
            fullNameError:!isFNameValid,
            fullNameHelper:!isFNameValid?'full name is not valid':"",
            mobilenumberError:!isEmailValid,
            mobilenumberHelper:!isEmailValid?'Email is not valid':"",
            passwordError:!isPassValid,
            passwordHelper:!isPassValid?'password is not valid':""
        }))
    }
    return (
        <div className='signup'>
            <form>
                <div id='icon' onClick={sigupclose} ><CloseRoundedIcon ></CloseRoundedIcon></div>
                <div className='form1'>
                    <p id='createtext'>Create your account</p>
                    <TextField id="outlined-basic" label='FullName'
                        InputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'gray' } }}
                        onChange={handleUser} name='firstName' value={user.firstName} error={errorObject.fullNameError} helperText={errorObject.fullNameHelper}

                    />
                    <TextField id="outlined-basic" label="Email" variant="outlined" inputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'gray' } }}
                        onChange={handleUser} name='email' value={user.email} error={errorObject.mobilenumberError} helperText={errorObject.mobilenumberHelper}

                    /><span id='email'>Use email instead</span>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' inputProps={{ style: { color: 'white' } }} InputLabelProps={{ style: { color: 'gray' } }} sx={{ '& .MuiPassword-icon': { fill: 'grey' } }}
                        onChange={handleUser} name='password' value={user.password} error={errorObject.passwordError} helperText={errorObject.passwordHelper}

                    />
                    <span id='datetext'>Date of birth</span>
                    <span id='text1'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>

                    <div className='date'>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Month</InputLabel>
                            <Select id='date' variant='outlined' sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color: 'white' }} >
                                {months.map((month, index) => (
                                    <MenuItem key={index} value={month}>{month}  </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Day</InputLabel>
                            <Select id='date1' label='Month' variant='outlined' sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color: 'white' }} >
                                {days.map((day, index) => (
                                    <MenuItem key={index} value={day}>{day} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Year</InputLabel>
                            <Select id='date2' label="Select Month" variant='outlined' sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color: 'white' }} >
                                {years.map((year, index) => (
                                    <MenuItem key={index} value={year}>{year}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <button id='nextbutt' onClick={hadleSignup} >Next</button>
                </div>
            </form>
        </div>
    )
}