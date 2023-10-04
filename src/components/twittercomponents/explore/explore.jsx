import css from '../explore/explore.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Search,SearchIconWrapper,StyledInputBase } from '../trending/trending'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import india from '../../../assests/india.png'
import pak from '../../../assests/pak.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const Explore=()=>{
    return(

        <div className='explore'>
           <div style={{position:'fixed',width:'42%'}}>
            <div className="search1">
          <Search style={{width:'40ch'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton  style={{color:'white'}} ><SettingsOutlinedIcon/></IconButton>
        </div>
        <div className="forfollowing">
                <div className="foryou"><p>For you</p></div>
                <div className="foryou"><p style={{color:'gray'}}>Trending</p></div>
                <div className="foryou"><p style={{color:'gray'}}>News</p></div>
                <div className="foryou"><p style={{color:'gray'}}>Sports</p></div>
                <div className="foryou"><p style={{color:'gray'}}>Entertain</p></div>
            </div>
            </div>
            <div style={{position:'relative',top:'15vh'}}>

            <div className="sports1">
                <div className="nfl">
                <p id='nfl'>NFL</p>
                <p id='final'>Final 'India won</p>
                    </div>
                <div className='india'> <img id='indimg' src={india}></img><p id='ind'>India</p><p id='score'> 356/2 (50.0)</p></div> 
                <div className='pak'><img id='indimg' src={pak}></img><p id='ind'>Pakistan</p><p id='score1'>128 (32.0)</p></div>  
   
            </div>
          
             <div className="trends">
             <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Entertainment 'Trending</span>
            <span id='span11' >#Devara</span>
            <span id='spansport'>Trending with <span id='spansport1'>#Jrntr #War2</span></span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey'}} /></IconButton>         
             </div>
        <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Holidays 'Trending</span>
            <span id='span11' >#GandhiJayanthi</span>
            <span id='spansport'>150k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey'}} /></IconButton>         
            </div>

        <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending in Business & Finance</span>
            <span id='span11' >The World Bank</span>
            <span id='spansport'>5601 posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>

        <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending in Sports</span>
            <span id='span11' >#ICCCricketWorldCup</span>
            <span id='spansport'>100k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
            <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Travel 'Trending</span>
            <span id='span11' >#Vande Bharat</span>
            <span id='spansport'>40.5k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
            <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending</span>
            <span id='span11' >#Salar</span>
            <span id='spansport'>40.5k posts<span id='spansport1'> #prabhas #neel</span></span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
            <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Entertainment</span>
            <span id='span11' >#YRFSPYUniverse</span>
            <span id='spansport'>101.1k <span id='spansport1'>#Jrntr #hrithik</span></span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
            <div className='sports2'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending</span>
            <span id='span11' >#Celebration</span>
            <span id='spansport'>89.7k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
            </div>
        </div>
      </div>
    )
}