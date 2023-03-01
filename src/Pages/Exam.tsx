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
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAppSelector } from '../app/store';
import { toast } from 'react-hot-toast';

interface examState {
   bache: string | null,
   title: string | null,
   quizId: string | null,
   mark: string | null,
 }

const Exam: React.FC = () => {
   let { eid } = useParams();
   const { id } = useAppSelector(state => state.userData.user);
   const navigate = useNavigate();
   const [value, setValue] = React.useState('');
   const [activeStep, setActiveStep] = useState(0);
   const [examDetails, setExamDetails] = useState({title: '', mark: 0, bache: '', quizId: ''});
   const [mark, setMark] = useState<number>(0);
   const [skipped, setSkipped] = useState(new Set<number>());
   const [quizzes, setQuizzes] = useState<DocumentData[]>([]);   
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const getQuiz = async () => {
         const docRef = doc(db, "quiz", eid || '');
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            const docData = docSnap.data();            
            setExamDetails({title: docData.title, mark, bache: docData.bache, quizId: eid || ''});
            docData.questions.forEach((item: object) => {
               setQuizzes(prevState => [...prevState, item]);
            });
         }
      }
      getQuiz();
    }, [eid, mark]);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
   };

   const isStepSkipped = (step: number) => {
      return skipped.has(step);
   };

   const handleNext = async () => {
      let newSkipped = skipped;
    
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
    
      // Check if the selected option is the correct answer
      const selectedOption = quizzes[activeStep]?.options?.find(
        (option: string) => option === value
      );

      const isCorrect = selectedOption === quizzes[activeStep]?.answer;
    
      // Assign marks to the question based on whether the answer is correct or not
      const marks = isCorrect ? 1 : 0;
    
      // Add the marks to the state
      setMark((prevMark)=>{
         return prevMark + marks;
      });
    
      if (activeStep === 9) {
         setLoading(true);
         const marksDetails = doc(db, "user", id || '');
         const markSnap = await getDoc(marksDetails);

         if (markSnap.exists()) {
            const { quiz_took } = markSnap.data();
            const reExam = quiz_took.find((exam: examState) => exam?.quizId === eid)

            if (reExam?.quizId === eid) {
               const userRef = doc(db, "user", id || '');
               const userDoc = await getDoc(userRef);
               const quizzes = userDoc.data()?.quiz_took;               
               const quizIndex = quizzes.findIndex(
                  (quiz: examState) => quiz.quizId === eid
                );

                quizzes[quizIndex].mark = examDetails.mark;
               await updateDoc(userRef, { quiz_took: quizzes })
               .then(()=> {
                  setLoading(false);
                  navigate(`/quiz/${eid}/completed`);
                })
                .catch((error)=>{
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setLoading(false);
                  toast.error(`${errorCode} : ${errorMessage}`);
                });
            } else{
               let markDetails = [...quiz_took, {
                   bache: examDetails.bache,
                   title: examDetails.title,
                   quizId: examDetails.quizId,
                   mark: `${examDetails.mark}`,
                 }];
    
                await updateDoc(marksDetails, {
                   quiz_took: markDetails,
                 })
                 .then(()=> {
                   setLoading(false);
                   navigate(`/quiz/${eid}/completed`);
                 })
                 .catch((error)=>{
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   setLoading(false);
                   toast.error(`${errorCode} : ${errorMessage}`);
                 });
            }
            
         }
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);          
    };    

  const handleSkip = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
         const newSkipped = new Set(prevSkipped.values());
         newSkipped.add(activeStep);
         return newSkipped;
      });

      setMark((prevMark)=>{
         return prevMark + 0;
      });

      if (activeStep === 9) {
         navigate(`/quiz/${eid}/completed`);         
      }
  };

  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         {examDetails?.title !== '' ? (
            <Typography 
               variant='h6' 
               sx={{p: '8px 0px', textAlign: 'center', mb: '15px', backgroundColor: '#F7F8FC', width: '94%',}}
            >{examDetails?.title} Quiz</Typography>
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
                     <Typography variant='inherit'>Q {activeStep+1}/10</Typography>
                     <MobileStepper
                        variant="progress"
                        steps={10}
                        position="static"
                        activeStep={activeStep}
                        sx={{ maxWidth: 670, flexGrow: 1 }}
                        nextButton={undefined}
                        backButton={undefined}
                     />
                     <Box component='div'/>
                        <Button 
                           color="inherit" 
                           onClick={handleSkip} 
                           sx={{ mr: 1 }}
                        >
                           Skip
                        </Button>
                        <Button onClick={handleNext}>
                           {activeStep === 9 ? loading ? 'Finishing...' : 'Finish' : 'Next'}
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