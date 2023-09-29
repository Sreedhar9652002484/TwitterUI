import csss from '../signup/signup.css'
import { TextField, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';


export const Signup = ({sigupclose}) => {

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const [user, setUser]=useState({
        fullname:'',
        mobilenumber:0,
        password:'',
    })
    const handleUser=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUser([...user, [name]=value])
    }

    return (
        <div className='signup'>
            <form>
                <div id='icon'onClick={sigupclose} ><CloseRoundedIcon ></CloseRoundedIcon></div>
                <div className='form1'>
                    <p id='createtext'>Create your account</p>
                    <TextField id="outlined-basic"  label='FullName'
                    InputProps={{style:{color:'white'}}} InputLabelProps={{ style: { color: 'gray' }}} />
                    <TextField id="outlined-basic" label="Phone" variant="outlined"  inputProps={{style:{color:'white'}}} InputLabelProps={{ style: { color: 'gray' } }} /><span id='email'>Use email instead</span>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password'  inputProps={{style:{color:'white'}}} InputLabelProps={{ style: { color: 'gray' } }} sx={{ '& .MuiPassword-icon': { fill: 'grey' }}} />
                    <span id='datetext'>Date of birth</span>
                    <span id='text1'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>

                    <div className='date'>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Month</InputLabel>
                            <Select id='date' variant='outlined'  sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color:'white'}} >
                                <MenuItem value="" disabled>
                                    <em>Month</em>
                                </MenuItem>
                                {months.map((month, index) => (
                                    <MenuItem  key={index} value={month}>{month} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Day</InputLabel>
                            <Select id='date1' label='Month' variant='outlined' sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color:'white'}} >
                                {months.map((month, index) => (
                                    <MenuItem key={index} value={month}>{month} </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="date" style={{ color: 'gray' }}>Year</InputLabel>
                            <Select id='date2' label="Select Month" variant='outlined' sx={{ '& .MuiSelect-icon': { fill: 'grey' }, color:'white'}} >
                                {months.map((month, index) => (
                                    <MenuItem key={index} value={month}>{month}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <button id='nextbutt'>Next</button>
                </div>
            </form>
        </div>
    )
}