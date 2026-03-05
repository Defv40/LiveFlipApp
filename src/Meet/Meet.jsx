import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MeetGalery from './MeetGalery';
import TuneIcon from '@mui/icons-material/Tune';
function Meet(){
    return(
    <>
    {/* <Fab variant='circular' sx={{width: 35, height: 30}} >
         <TuneIcon />
    </Fab> */}
        
        <MeetGalery/>

     <Box sx={{ '& > :not(style)': { m: 1 } }}>
       
        <Fab color="error" aria-label="add">
            <ThumbDownIcon />
        </Fab>
        
        <Fab variant='circular' color='primary' aria-label="like">
            <FavoriteIcon />
        </Fab>
        </Box>
    </>
    )
   
}


export default Meet;