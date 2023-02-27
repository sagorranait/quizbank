import React, { useEffect, useState } from 'react';
import { 
   Box, 
   Button, 
   Typography,
   MobileStepper,
   FormControl,
   RadioGroup,
   FormControlLabel,
   Radio,
   Stack,
   Skeleton
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const steps = ['1', '2', '3','4', '5', '6','7', '8', '9','10'];

const Exam: React.FC = () => {
   let { eid } = useParams();
   const navigate = useNavigate();
   const [value, setValue] = React.useState('');
   const [activeStep, setActiveStep] = useState(0);
   const [examTitle, setExamTitle] = useState('');
   const [skipped, setSkipped] = useState(new Set<number>());
   const [quizzes, setQuizzes] = useState<DocumentData[]>([]);

   useEffect(() => {
      const getQuiz = async () => {
         const docRef = doc(db, "quiz", eid || '');
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            const docData = docSnap.data();
            setExamTitle(docData.title);
            docData.questions.forEach((item: object) => {
               setQuizzes(prevState => [...prevState, item]);
            });
         }
      }
      getQuiz();
    }, [eid]);
    

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
         {examTitle !== '' ? (
            <Typography 
               variant='h6' 
               sx={{p: '8px 0px', textAlign: 'center', mb: '15px', backgroundColor: '#F7F8FC', width: '94%',}}
            >{examTitle} Quiz</Typography>
         ) : (
            <Stack spacing={1} sx={{width: '890px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <Skeleton variant="text" sx={{ fontSize: '1.5rem', width: '150px', mb: '20px' }} />
            </Stack>
         )}
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
                  {quizzes.length > 0 ? (
                  <Box component='div'>
                     <Typography variant='inherit' sx={{fontSize: '18px', pb: '15px'}}>{quizzes[activeStep]?.title}</Typography>
                     <FormControl>
                        <RadioGroup
                           aria-labelledby="demo-controlled-radio-buttons-group"
                           name="controlled-radio-buttons-group"
                           value={value}
                           onChange={handleChange}
                        >
                           {quizzes[activeStep]?.options?.map((option : string, index: number) => <FormControlLabel 
                              key={index} 
                              value={option} 
                              control={<Radio />} 
                              label={option}
                           />)}
                        </RadioGroup>
                     </FormControl>
                  </Box>
                  ) : (
                     <Stack spacing={1} sx={{width: '890px', height: '210px'}}>
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '650px', mb: '25px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px', mb: '15px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px', mb: '15px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px', mb: '15px' }} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px' }} />
                     </Stack>
                  )}
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