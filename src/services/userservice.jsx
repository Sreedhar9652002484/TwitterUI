
import axios from 'axios'

export const Registration=async(data)=>{
    try{
        const response=await axios.post('https://localhost:44371/api/User/Register',data);
        return response;
    }
    catch(error){
        throw(error);
    }
}
export const Signin=async(data)=>{
    try{
        const response=await axios.post('https://localhost:44371/api/User/login',data)
        
        return response;
       
    }
    catch(error){
        console.log(error);
    }
}