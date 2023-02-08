import React from 'react';
import Slider from "react-slick";
import { Box, IconButton, MobileStepper, Typography } from '@mui/material';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SliderItem from './SliderItem';

const QuizSlider: React.FC = () => {
  const slider = React.useRef<any>(null);
  const [activeStep, setActiveStep] = React.useState<number>(1);

   const settings = {
      arrows: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      variableWidth: true,
      afterChange: function(index : number) {
        setActiveStep(index+1);
      }
    };

  return (
    <Box component='div' className='quizSlider'>
        <Slider ref={slider} {...settings}>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
          <SliderItem/>
        </Slider>
        <Box component='div' sx={{display: 'flex', alignItems: 'center', gap: '20px', p: '0px 20px'}}>
          <Box sx={{ width: '80%', mr: 1 }}>
            {/* <LinearProgress variant="determinate" value={activeStep+50}  /> */}
            <MobileStepper
                variant="progress"
                steps={11}
                position="static"
                activeStep={activeStep}
                sx={{ width: '100%', flexGrow: 1, backgroundColor: '#F7F8FC' }}
                nextButton={undefined}
                backButton={undefined}
              />
          </Box>
          <Typography variant='inherit'>{activeStep}/10</Typography>
          <Box component='div'>
            <IconButton sx={{border: '1px solid #D9E5EE', mr: '10px'}} onClick={() => slider?.current?.slickPrev()} color="primary" component="label">
                <NavigateBeforeOutlinedIcon/>
            </IconButton>
            <IconButton sx={{border: '1px solid #D9E5EE'}} onClick={() => slider?.current?.slickNext()} color="primary" component="label">
                <NavigateNextOutlinedIcon/>
            </IconButton>
          </Box>
        </Box>
      </Box>
  )
}

export default QuizSlider