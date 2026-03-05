import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Button, TextField} from '@mui/material';
import {motion} from 'motion/react';
function Profile(){
    return (
    <>
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500]} }>OP</Avatar>
    </Stack>
            


      <TextField id="outlined-basic" label="Почта" variant="outlined"   />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />

      <Button
        variant="outlined"
        component={motion.button} // Говорим MUI использовать motion.button
        whileHover={{ scale: 1.1 }} // Анимация при наведении
        whileTap={{ scale: 0.95 }}  // Анимация при клике
       
      >
      Нажми меня
    </Button>
      </>
    
  );
}

export default Profile;