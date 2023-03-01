import React, { useEffect, useState } from 'react';
import { 
   Box,
   Typography,
   Avatar,
   Stack,
   Skeleton
} from '@mui/material';
import Reward from '../Assets/reward.png';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase.config';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { useAppSelector } from '../app/store';

interface examResultState {
   bache: string | null,
   title: string | null,
   quizId: string | null,
   mark: string | null,
 }

const ExamPracticed: React.FC = () => {
   let { quiz } = useParams();
   const { id } = useAppSelector(state => state.userData.user);
   const [quizResult, setQuizResult] = useState<DocumentData>({});   

   useEffect(() => {
      const getQuizResult = async () => {
         const docRef = doc(db, "user", id || '');
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            const { quiz_took } = docSnap.data(); 
            const result = quiz_took.find((quizs: examResultState) => quizs.quizId === quiz);
            setQuizResult(result);
         }
      }
      getQuizResult();
    }, [id, quiz]);    

  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Box 
            component='div'
            sx={{
               width: '750px',
               backgroundColor: '#FFF',
               boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
               borderRadius: '15px',
               p: '0px 0px 30px',
               textAlign: 'center',
            }}
         >
         {Object.keys(quizResult).length > 0 ? (
            <>
               <Typography 
                  variant='h6' 
                  sx={{p: '15px 0px', textAlign: 'center', mb: '15px', borderBottom: '1px solid #ddd'}}
               >{quizResult.title} Practiced</Typography>           
               <Avatar alt="Reward" src={Reward} sx={{borderRadius: '0px', border: 'none', width: '90px', height: '90px', m: '0 auto'}} />
               <Typography variant='inherit' sx={{p: '10px 0 0px'}}>Great Work! You earned a practice badge.</Typography>
               <Typography variant='body1' sx={{p: '5px 0'}}>Now you are ready to give the exam.</Typography>
               <Typography variant='body1'>
                  Please, go to the <Link to='/'><u>Quizzes</u></Link> page to start the exam.
               </Typography>                 
            </>
            ) : (
               <Stack spacing={1} sx={{width: '750px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '350px', p: '15px 0px'}}  />
                  <Skeleton variant="circular" sx={{borderRadius: '0px', border: 'none', width: '90px', height: '90px', m: '0 auto'}} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px', mb: '15px' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px', mb: '15px' }} />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', width: '450px' }} />
               </Stack>
            )}
         </Box>
      </Box>
   </Box>
  )
}

export default ExamPracticed