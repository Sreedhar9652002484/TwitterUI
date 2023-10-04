import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import css from '../notifications/notification.css'
import img from '../../../assests/jrntr.jpg'
import img1 from '../../../assests/adam.jpeg'
import img2 from'../../../assests/modi.jpg'
import img3 from'../../../assests/virat.jpg'
import img4 from'../../../assests/shivi.jpg'
import x from '../../../assests/xlogo1.png'


import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, IconButton } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Person2Icon from '@mui/icons-material/Person2';

export const Notifications=()=>{
    return(
        <div className='notification'>
            <div className="notify">
            <p id='notetext'>Notifications</p>
            <SettingsOutlined/>
            </div>
            <div className="forfollowing1">
                <div className="foryou1"><p>All</p></div>
                <div className="foryou1"><p style={{color:'gray'}}>Verified</p></div>
                <div className="foryou1"><p style={{color:'gray'}}>Mentions</p></div>
            </div>
            <div className="noteimg">
                <IconButton style={{color:' #1d9bf0'}} ><NotificationsIcon  style={{fontSize:'38'}} /></IconButton>
                <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}><img src={img}id='ntrimg'></img>
                <span id='newpost'> New post notifications for Jr NTR <VerifiedIcon  style={{color:' #1d9bf0', fontSize:'18'}}/></span>
                </div>
            </div>
            <div className="noteimg2">
                <IconButton style={{color:'#f91880'}} ><FavoriteOutlinedIcon  style={{fontSize:'35'}} /></IconButton>
                <div style={{display:'flex', flexDirection:'column',gap:'1vh',textAlign:'left'}}><img src={img1}id='ntrimg'></img>
                <span id='newpost'> C Adam liked a post you were mentioned in</span>
                <span id='newpost'style={{color:'gray'}}>No thanks</span>
                </div>
            </div>
            <div className="noteimg2">
                <IconButton style={{color:' #1d9bf0'}} ><Person2Icon  style={{fontSize:'38'}} /></IconButton>
                
                <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}>
                <div style={{display:'flex'}}><img src={img2}id='ntrimg'></img>
                <img src={img3}id='ntrimg'></img>
                <img src={img4}id='ntrimg'></img>
                <Avatar/>
                <Avatar>SR</Avatar>
                </div>
                <span id='newpost'> (: and 1200 others followed you</span>
                <span id='newpost'style={{color:'gray'}}>Followers</span>
                </div>
            </div>
            <div className="noteimg">
                <IconButton style={{color:' #1d9bf0'}} ><NotificationsIcon  style={{fontSize:'38'}} /></IconButton>
                <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}><img src={img2}id='ntrimg'></img>
                <span id='newpost'> New post notifications for Narendra Modi <VerifiedIcon  style={{color:' #1d9bf0', fontSize:'18'}}/></span>
                </div>
            </div>
            <div className="noteimg">
                <IconButton style={{color:' #1d9bf0'}} ><NotificationsIcon  style={{fontSize:'38'}} /></IconButton>
                <div style={{display:'flex', flexDirection:'column',gap:'1vh'}}><img src={img3}id='ntrimg'></img>
                <span id='newpost'> New post notifications for Virat Kohli <VerifiedIcon  style={{color:' #1d9bf0', fontSize:'18'}}/></span>
                </div>
            </div>
            <div className="noteimg2">
                <IconButton style={{color:'#f91880'}} ><FavoriteOutlinedIcon  style={{fontSize:'35'}} /></IconButton>
                <div style={{display:'flex', flexDirection:'column',gap:'1vh',textAlign:'left'}}><img src={img1}id='ntrimg'></img>
                <span id='newpost'> C Adam liked a post you were mentioned in</span>
                <span id='newpost'style={{color:'gray'}}>No thanks</span>
                </div>
            </div>
            <div className="noteimg">
                <img src={x}></img>
                <span id='newpost' style={{position:'relative',top:'2vh'}}>There was a login to your account @SRI191819 from a new device on Oct 02, 2023. Review it now.</span>
            </div>
            
        </div>
    )
}