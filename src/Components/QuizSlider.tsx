import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Box, IconButton, MobileStepper, Typography, Skeleton } from '@mui/material';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SliderItem from './SliderItem';
import { collection, DocumentData, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from '../firebase.config';

const QuizSlider: React.FC = () => {
  const slider = React.useRef<any>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [sliderItem, setSliderItem] = useState<DocumentData[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "quiz"), orderBy("title", "desc"), limit(10));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setSliderItem(prevState => [...prevState, doc.data()]);
      });
    }
    getData();
  }, [])  

   const settings = {
      arrows: false,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 764,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }        
      ],
      afterChange: function(index : number) {
        setActiveStep(index+1);
      },
    };

  return (
    <Box component='div' className='quizSlider'>
      {sliderItem.length > 0 ? (
          <Slider ref={slider} {...settings}>
            {sliderItem.map((item, index) => (
            <SliderItem 
              key={index} 
              bache={item.bache} 
              title={item.title}  
              topics={item.topics}
              type={item.type}
            />
            ))}
          </Slider>
      ) : (
        <Box component='div' sx={{display: 'flex', gap: '15px', mb: '20px'}}>
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />        
          <Skeleton variant="rectangular" width="275px" height='242px' sx={{borderRadius: '15px'}} />        
        </Box>
      )}
        <Box 
          component='div' 
          sx={{
            display: 'flex', 
            alignItems: 'center', 
            gap: {xs: '12px', sm: '12px', md: '20px', lg:'20px'}, 
            p: '10px 20px',
            justifyContent: {xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start'}
          }}
        >
          <Box sx={{ width: {xs: '70px', sm: '70px', md: '75%', lg: '80%'}, mr: 1 }}>
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