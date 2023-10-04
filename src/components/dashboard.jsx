import css from '../components/dashboard.css'
import logo from '../assests/xlogo1.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PeopleIcon from '@mui/icons-material/People';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { IconButton, MenuItem } from '@mui/material';
import profile from '../assests/profile.jpg'
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from './twittercomponents/home/home';
import { Trending } from './twittercomponents/trending/trending';
import { Explore } from './twittercomponents/explore/explore';
import { Notifications } from './twittercomponents/notifications/notification';
import { Messages } from './twittercomponents/messages/message';


const initialState={
    selectedTab:'Home'
}

const reducer=(state, action)=>{
    switch (action.type){
        case 'TAB':
            return {...state, selectedTab:action.payload};
        default:
            return state;
    }

}

export const TwitterDashboard=()=>{
    const [logut, setLogout]=useState(false);
    const handleprofileLogout=()=>{
        setLogout(!logut)
    }
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        if(localStorage.getItem('token')===null){
            navigate('/')
        }
    }

    const [state, dispatch]=useReducer(reducer, initialState)

    const renderTab=()=>{
        switch(state.selectedTab){
            case 'Home':
                return <Home/>
            case 'Explore':
                return <Explore/> 
            case 'Notifications':
                return <Notifications/>
            case 'Messages':
                return <Messages/>
        }
    }

    console.log(initialState.selectedTab);
    console.log(state);


    return(       
         <div className="twitter">
            <div className="left">
                <div className="icons">
                <img id="logo"src={logo}alt='logo' ></img>
            <div className="iconbu"><IconButton className='iconbutton1' id='icons1' onClick={()=>dispatch({type:'TAB', payload:'Home'})} ><HomeIcon  style={{fontSize:'38'}}/><span id='span'>Home</span></IconButton></div>
            <div className="iconbu"><IconButton className='iconbutton1' id='icons1' onClick={()=>dispatch({type:'TAB',payload:'Explore'})}  ><SearchIcon style={{fontSize:'35'}}/><span id='span'>Explore</span></IconButton></div>
            <div className="iconbu"><IconButton  className='iconbutton'id='icons1' onClick={()=>dispatch({type:'TAB',payload:'Notifications'})} ><NotificationsNoneIcon style={{fontSize:'35'}}/><span id='span'>Notifications</span></IconButton></div>
            <div className="iconbu"><IconButton className='iconbutton' id='icons1'  onClick={()=>dispatch({type:'TAB',payload:'Messages'})}><MailOutlineIcon style={{fontSize:'32'}}/><span id='span'>Messages</span></IconButton></div>
            <div className="iconbu"><IconButton  className='iconbutton'id='icons1'><FeaturedPlayListIcon style={{fontSize:'32'}}/><span id='span'>Lists</span></IconButton></div>
            <div className="iconbu"><IconButton className='iconbutton'id='icons1'><PeopleIcon style={{fontSize:'32'}}/><span id='span'>Communities</span></IconButton></div>
            <div className="iconbu"><IconButton className='iconbutton' id='icons1'><img id="logo1" src={logo}alt='logo' ></img><span id='span1'>Premium</span></IconButton></div>
            <div className="iconbu"><IconButton className='iconbutton' id='icons1'><PermIdentityOutlinedIcon style={{fontSize:'32'}}/><span id='span'>Profile</span></IconButton> </div>
            <div className="iconbu"><IconButton className='iconbutton' id='icons1'><PendingOutlinedIcon style={{fontSize:'32'}}/><span id='span'>More</span></IconButton></div>
               <div className='post1'><button id='post1'>Post</button></div> 
                {logut&&
                     <div className='profile-menu'>
                     <MenuItem>Add an existing account</MenuItem>
                     <MenuItem onClick={handleLogout}>Log out @SRI191819</MenuItem>
                   </div>
                    }
                <div className='profile' onClick={handleprofileLogout}>
                <img id='profile'src={profile}></img>
                    <div><p id='profiletext'>Sreedhar Nagalli</p>
                    <span id='spanid'>@SRI19189</span>
                    </div>
                    <IconButton className='iconbutton' id='icons2'>
                        <MoreHorizIcon style={{fontSize:'28'}}/></IconButton>
                    </div>
                </div> 
            </div>
            <div className="center" {...state.selectedTab==='Messages'&& {style:{flexBasis:'30%'}}}  >
            {renderTab()}
            </div>
            <div className="right">
                {state.selectedTab==='Messages'?
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'70%',height:'100vh'}}>
                <div style={{textAlign:'left'}}>
                <p style={{fontSize:'2rem',fontWeight:'650'}}>Select a message</p>
                <p style={{fontSize:'1.2rem',color:'gray',position:'relative',bottom:'2vh'}}>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                <button style={{width:'25vh',height:'7vh',borderRadius:'2rem', backgroundColor:'#1a8dc8',color:'white',cursor:'pointer',fontSize:'1.2rem'}}>New message</button>
                </div>
                </div>:
                <Trending/>}
            </div>
         </div>
    )
}