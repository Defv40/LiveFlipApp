import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import maxColdImg from '../assets/max_cold.jpg';
import reactImg from '../assets/react.svg';

export default function MeetGalery() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

 const img_path = [
    maxColdImg,
    reactImg,
  ]
 
  
  

  return (

    <>
    {/* <img src={img_path[activeStep]} alt="Галерея" /> */}
    <img src={img_path[activeStep]} alt="Галерея" style={{width:300, height:300}}/> 

    <MobileStepper
      variant="dots"
      steps={2}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
          Следующая
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Назад
        </Button>
      }
    />

    </>
  );
}