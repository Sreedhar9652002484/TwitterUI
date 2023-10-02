import { Typography } from '@mui/material';
import css from '../trending/trending.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import img from '../../../assests/trendimg.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '2rem',
  height: '6vh',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '28ch',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'gray'
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));


export const Trending = () => {

  return (
    <div className="main1">
      <div className='trending'>
        <div className="search">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <div className='subscribe'>
          <Typography>
            <p id='subtext'>Subscribe to Premium</p><span id='subspan'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
            <div><button id='subscribe'>Subscribe</button></div>
          </Typography>
        </div>
      </div>
      <div className='whats'>
        <span id='whattext'>What's happening</span>
        <div className='sports'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>NFL 'Last night</span>
            <span id='span11' >Dolphins at Bills</span></div>
          <img src={img} id='sports' alt='sports'></img>
        </div>

        <div className='sports'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Entertainment 'Trending</span>
            <span id='span11' >#Devara</span>
            <span id='spansport'>80.5k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey', position:'relative', left:'9.7vw' }} /></IconButton>         
             </div>

        <div className='sports'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Holidays 'Trending</span>
            <span id='span11' >#GandhiJayanthi</span>
            <span id='spansport'>150k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon style={{ fontSize: '28', color: 'grey', position:'relative', left:'9.7vw'}} /></IconButton>         
            </div>

        <div className='sports'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending in Business & Finance</span>
            <span id='span11' >The World Bank</span>
            <span id='spansport'>5601 posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon className='moreicon' style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>

        <div className='sports'>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span id='spansport'>Trending in Sports</span>
            <span id='span11' >#ICCCricketWorldCup</span>
            <span id='spansport'>100k posts</span></div>
          <IconButton className='iconbutton' id='icons4'>
            <MoreHorizIcon className='moreicon' style={{ fontSize: '28', color: 'grey' }} /></IconButton>          
            </div>
      </div>

    </div>

  )
}