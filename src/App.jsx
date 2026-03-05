import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import maxColdImg from './assets/max_cold.jpg';
import {motion} from 'motion/react';
import { Button, TextField} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import Profile from './Profile/Profile';
import Meet from './Meet/Meet';
const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

function App() {
  const [count, setCount] = useState(0)

  const [value, setValue] = useState('recents');
  const [page, setPage] = useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const pages = [
    <Meet/>,
    <Profile/>
  ]

  const getPageByIndex = (index) =>{
    if (index >= pages.length)
      return null;

    return pages[index];
  }
  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          
          setValue(newValue);

          setPage(getPageByIndex(newValue));

        }}
      >
        <BottomNavigationAction label="Анкеты" icon={<PersonIcon />} />
        <BottomNavigationAction label="Лайки" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Чаты" icon={<ChatIcon />} />
        <BottomNavigationAction label="Профиль" icon={<HomeIcon />} />
      </BottomNavigation>

    {page}
    {/* <Profile/> */}

      
    </>
  )
}

export default App
