import React, { useEffect, useState } from 'react';
import { 
   Box, 
   Button, 
   Typography,
   MobileStepper,
   FormControl,
   RadioGroup,
   FormControlLabel,
   Radio
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const steps = ['1', '2', '3','4', '5', '6','7', '8', '9','10'];

const quizzes = [
   { title: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 2?', options: ['a[title]{...}1', 'a > title {...}1', 'a.title {...}1', 'a=title {...}1'] },
   { title: ' Using an attribute selector, 3?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 4?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 5?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 6?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 7?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 8?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 9?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] },
   { title: ' Using an attribute selector, 10?', options: ['a[title]{...}', 'a > title {...}', 'a.title {...}', 'a=title {...}'] }
];

const Exam: React.FC = () => {
   const navigate = useNavigate();
   const [timeLeft, setTimeLeft] = useState(600);
   const [activeStep, setActiveStep] = useState(0);
   const [skipped, setSkipped] = useState(new Set<number>());


   useEffect(() => {
      if (timeLeft <= 0) return;
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }, [timeLeft]);

   const [value, setValue] = React.useState('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
   };

   const isStepSkipped = (step: number) => {
      return skipped.has(step);
   };

   const handleNext = () => {
      let newSkipped = skipped;

      if (isStepSkipped(activeStep)) {
         newSkipped = new Set(newSkipped.values());
         newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);

      if (activeStep === 9) {
         navigate('/quiz/html/completed');         
      }
   };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values());
         newSkipped.add(activeStep);
         return newSkipped;
      });

      if (activeStep === 9) {
         navigate('/quiz/html/completed');         
      }
  };

  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography 
               variant='h6' 
               sx={{p: '8px 0px', textAlign: 'center', mb: '15px', backgroundColor: '#F7F8FC', width: '94%',}}
            >Reactjs Quiz</Typography>
            <Typography>{Math.floor(timeLeft / 60)} : {timeLeft % 60}s</Typography>
         </Box>
         <Box 
            component='div'
            sx={{
               width: '950px',
               backgroundColor: '#FFF',
               boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
               borderRadius: '15px',
               p: '30px'
            }}
         >
            <Box sx={{ width: '100%' }}>
               <React.Fragment>
                  <Box component='div'>
                     <Typography variant='inherit' sx={{fontSize: '18px', pb: '15px'}}>{quizzes[activeStep].title}</Typography>
                     <FormControl>
                        <RadioGroup
                           aria-labelledby="demo-controlled-radio-buttons-group"
                           name="controlled-radio-buttons-group"
                           value={value}
                           onChange={handleChange}
                        >
                           {quizzes[activeStep].options?.map((option, index) => <FormControlLabel key={index} value={option} control={<Radio />} label={option} />)}
                        </RadioGroup>
                     </FormControl>
                  </Box>
                  <Box sx={{ pt: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                     <Typography variant='inherit'>Q{activeStep + 1}/10</Typography>
                     <MobileStepper
                        variant="progress"
                        steps={10}
                        position="static"
                        activeStep={activeStep}
                        sx={{ maxWidth: 630, flexGrow: 1 }}
                        nextButton={undefined}
                        backButton={undefined}
                     />
                     <Box component='div'/>
                        <Button
                           color="inherit"
                           disabled={activeStep === 0}
                           onClick={handleBack}
                           sx={{ mr: 1 }}
                        >
                           Back
                        </Button>
                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                           Skip
                        </Button>
                        <Button onClick={handleNext}>
                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                  </Box>
               </React.Fragment>
            </Box>
         </Box>
      </Box>
   </Box>
  )
}

export default Exam