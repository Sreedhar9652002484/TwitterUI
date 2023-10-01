import { Typography } from '@mui/material';
import css from '../trending/trending.css'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '2rem',
    height:'6vh',
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
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'gray'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
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


export const Trending=()=>{
    
    return(
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

        </div>
        </div>

    )
}