import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import css from '../messages/message.css'
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { Search,StyledInputBase,SearchIconWrapper } from '../trending/trending';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CircleIcon from '@mui/icons-material/Circle';
import profile from '../../../assests/virat.jpg'
import modi from '../../../assests/modi.jpg'
import sivi from '../../../assests/shivi.jpg'
import tarak from '../../../assests/jrntr.jpg'

export const Messages=()=>{
    return(
        <div className='messages'>
            <div className="notify1">
            <p id='notetext'>Messages</p>
           <div style={{display:'flex', gap:'1vh'}}><SettingsOutlined/>
            <MarkEmailReadOutlinedIcon/></div> 
            </div>
            <div className="search">
          <Search style={{width:'30ch', border:'1px solid #8080804d',backgroundColor:'black'}}>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className="dot">
        <div className="message">
            <IconButton  style={{borderRadius:'2rem',border:'1px solid #8080804d', height:'6vh'}}><ForwardToInboxIcon  style={{color:'white',fontSize:'30'}}/></IconButton>
           <div style={{display:'flex',flexDirection:'column',textAlign:'left',}}> <p style={{fontSize:'1.2rem',fontWeight:'630'}}>Message requests</p><span style={{fontSize:'0.9rem',color:'grey',position:'relative',bottom:'2vh'}}>20 new requests</span></div>
        </div>
        <IconButton><CircleIcon style={{color:'#1d9bf0',fontSize:'13'}}/>
        </IconButton></div>
        <p id='pinned'>All conversations</p>
        <div className='profile2' >
                <img id='profile'src={profile}></img>
                    <div><p id='profiletext'>Virat Kohli <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@imVkohli   &#8226;Oct 4</span></p>
                    <span id='spanid'>You shared a post</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={modi}></img>
                    <div><p id='profiletext'>Narendra Modi<span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}> @narendramodi   &#8226;Jun 13</span></p>
                    <span id='spanid'>You reacted with  <span style={{color:'red'}}>&hearts; </span>Thank you sir</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={sivi}></img>
                    <div><p id='profiletext'>Shiviweb <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@Shiviweb   &#8226;Sep 25</span></p>
                    <span id='spanid'>You shared a post</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={tarak}></img>
                    <div><p id='profiletext'>Jr NTR <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@tarak999   &#8226;Oct 1</span></p>
                    <span id='spanid'>You sent a message</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={profile}></img>
                    <div><p id='profiletext'>Virat Kohli <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@imVkohli   &#8226;Oct4</span></p>
                    <span id='spanid'>You shared a post</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={profile}></img>
                    <div><p id='profiletext'>Virat Kohli <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@imVkohli   &#8226;Oct4</span></p>
                    <span id='spanid'>You shared a post</span>
                    </div>
                </div>
                <div className='profile2' >
                <img id='profile'src={profile}></img>
                    <div><p id='profiletext'>Virat Kohli <span style={{color:'grey',fontSize:'1.1rem',fontWeight:'normal'}}>@imVkohli   &#8226;Oct4</span></p>
                    <span id='spanid'>You shared a post</span>
                    </div>
                </div>
        </div>
    )
}