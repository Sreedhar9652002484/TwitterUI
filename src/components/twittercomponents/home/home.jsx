import cscs from '../home/home.css'
import image from '../../../assests/profile.jpg'
import { FormControl, IconButton, InputLabel, Select, TextField, Typography } from '@mui/material'
import { Global } from '@emotion/react'
import PublicIcon from '@mui/icons-material/Public';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import profile from '../../../assests/profile.jpg'
import shree from '../../../assests/shreekrishna.jpg'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useState } from 'react';
import modi from '../../../assests/modi.jpg'
import modipost from '../../../assests/modipost.jfif'


export const Home = () => {
    const [open, setOpen]=useState(false);

    const handleOpen=()=>{
        setOpen(true);
    }
    return (
        <div className='home'>
            <div style={{position:'fixed',width:'42%'}}  >
            <span id='home'>Home</span>
            <div className="forfollowing">
                <div className="foryou"><p>For you</p></div>
                <div className="foryou"><p style={{color:'gray'}}>Following</p></div>
            </div>
            </div>
            <div style={{position:'relative',top:'15vh'}} onClick={handleOpen}>
            { open?<div className='everyone'>
              <div style={{display:'flex',height:'auto',borderBottom:'1px solid #8080804d',position:'relative',top:'2vh'}}><div className='tweetimg'><img id='tweetimg' src={image}></img></div>

                    <div style={{display:'flex',flexDirection:'column',gap:'2vh'}}><div className='formcontrol'><FormControl className='select' > 
                    <InputLabel  style={{ color: '#1d9bf0'}}>Everyone</InputLabel>
                         <Select id='select' variant='standard' sx={{ '& .MuiSelect-icon': { fill: '#1d9bf0' }}}></Select></FormControl></div>
                  
                    {/* <select id='select'name='Everone'>Everyone</select> */}
                 <div className='textfield'><TextField inputProps={{style:{fontSize:'3vh',color:'grey'}}}
                    multiline className='textfield'variant='standard' placeholder='What is happening?!'></TextField></div> 
                    <div className='earth'>< PublicIcon/><span>Everyone can reply</span></div>
                    <div className='iconpost'><IconButton id='icon11'>
                        <  BrokenImageOutlinedIcon />
                    </IconButton >
                        <IconButton id='icon11'>
                            <GifBoxOutlinedIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <ReadMoreIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <EmojiEmotionsIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <PendingActionsIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <LocationOnOutlinedIcon />
                        </IconButton>
                        <div className='hash' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                            <div style={{ color: 'white', backgroundColor: '#cd399e', width: '4vh', height: '4vh', borderRadius: '50%', textAlign: 'center' }}>#</div>
                            <div className='postbutt'><button id='postbutt'>Post</button></div>
                        </div>
                    </div>
                
                    </div>
                    </div>
                </div>
                
                :
            <div className="posting">
                <div className='tweetimg'><img id='tweetimg' src={image}></img></div>
                <div className='typo'><Typography style={{ color: 'grey', fontSize: '1.4rem' }}>What is happening?!</Typography>
                    <div className='iconpost'><IconButton id='icon11'>
                        <  BrokenImageOutlinedIcon />
                    </IconButton >
                        <IconButton id='icon11'>
                            <GifBoxOutlinedIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <ReadMoreIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <EmojiEmotionsIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <PendingActionsIcon />
                        </IconButton>
                        <IconButton id='icon11'>
                            <LocationOnOutlinedIcon />
                        </IconButton>
                        <div className='hash' style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                            <div style={{ color: 'white', backgroundColor: '#cd399e', width: '4vh', height: '4vh', borderRadius: '50%', textAlign: 'center' }}>#</div>
                            <div className='postbutt'><button id='postbutt'>Post</button></div>
                        </div>
                    </div>
                </div>

              
            </div>}
            <div className='tweet'>
            <div className='profile1' >
                <img id='profile' src={profile}></img>
                <div className='profiletext'><p id='profiletext1'>Sreedhar Nagalli </p><p id='spanid1'>@SRI19189</p><p id='spanid1'> &#8226;Oct 1</p>
                    <IconButton className='iconbutton' id='icons3'>
                         <MoreHorizIcon style={{ fontSize: '28' }} /></IconButton>
                </div>

            </div>
            <div className="control">
            <div className="tweetpost">
                <p id='para2'>Jai Shree Krishna &#x1F64F;<span id='ram'>#JaiShreeKrishna #JaiShreeRam</span></p> 
               
                <img  id='krishna'src={shree}></img>
                <div className='iconspost'>  
                   <div><IconButton style={{color:'grey'}} ><TextsmsOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>567</span></div> 
                   <div><IconButton style={{color:'grey'}} ><RepeatOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>1.5k</span></div> 
                   <div><IconButton style={{color:'grey'}} ><FavoriteBorderOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>5.3k</span></div> 
                   <div><IconButton style={{color:'grey'}} ><AlignVerticalBottomOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>50.54k</span></div> 
                   <div><IconButton style={{color:'grey'}} ><FileUploadOutlinedIcon/></IconButton></div> 
 
                </div>
                
            </div>
            </div>
            </div>
            <div className='tweet'>
            <div className='profile1' >
                <img id='profile' src={modi}></img>
                <div className='profiletext'><p id='profiletext1'>Narendra Modi </p><p id='spanid1'>@narendramodi</p><p id='spanid1'> &#8226;17h</p>
                    <IconButton className='iconbutton' id='icons3'>
                         <MoreHorizIcon style={{ fontSize: '28' }} /></IconButton>
                </div>

            </div>
            <div className="control">
            <div className="tweetpost">
                <p id='para2'>Proud of Parul Chaudhary for winning the Gold Medal in Women’s 5000m event. 

Hers was a performance that was truly awe inspiring. May she keep soaring high and sprinting towards success.<span id='ram'>#India #Goldmedal</span></p> 
               
                <img  id='krishna'src={modipost}></img>
                <div className='iconspost'>  
                   <div><IconButton style={{color:'grey'}} ><TextsmsOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>5670</span></div> 
                   <div><IconButton style={{color:'grey'}} ><RepeatOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>52.4k</span></div> 
                   <div><IconButton style={{color:'grey'}} ><FavoriteBorderOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>101.21k</span></div> 
                   <div><IconButton style={{color:'grey'}} ><AlignVerticalBottomOutlinedIcon/></IconButton><span style={{color:'gray', fontSize:'1rem'}}>1.1m</span></div> 
                   <div><IconButton style={{color:'grey'}} ><FileUploadOutlinedIcon/></IconButton></div> 
 
                </div>
                
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}