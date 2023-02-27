import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { 
   Box, 
   Button, 
   Avatar, 
   Typography, 
   List, 
   ListItem, 
   ListItemText,
   Divider,
   Stack,
   Skeleton
} from '@mui/material';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useAppSelector } from '../app/store';
import { toast } from 'react-hot-toast';

const ExamDetails: React.FC = () => {
   let { quizid } = useParams();
   const navigate = useNavigate();
   const docRef = doc(db, "quiz", quizid || '');
   const { id } = useAppSelector(state => state.userData.user);
   const [details, setDetails] = useState<DocumentData[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const getQuiz = async () => {
         const docSnap = await getDoc(docRef);         
         const data: React.SetStateAction<DocumentData[]> = [];

         if (docSnap.exists()) {
            const docData = docSnap.data();
            docData.id = docSnap.id;
            const {id, bache, title, topics, user_attend} = docData
            data.push({id, bache, title, topics, user_attend});
         } 
         setDetails(data);
      }
      getQuiz();
    }, [docRef]);
    
    const examStartHandler = async() => {
      const data = details[0].user_attend;
      data.push(`${id}`);
            
      setLoading(true);
      await updateDoc(docRef, {
         user_attend: data,
       })
       .then(()=>{
         setLoading(false);
         navigate(`/quiz/${details[0].id}/start`);
       })
       .catch((error)=>{
         const errorCode = error.code;
         const errorMessage = error.message;
         setLoading(false);
         toast.error(`${errorCode} : ${errorMessage}`);
       });
    }
   
  return (
   <Box component='div' sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <Box component='div'>
         <Link to='/'>
            <Button 
               variant="text" 
               startIcon={<KeyboardBackspaceOutlinedIcon />} 
               sx={{ color: '#00000099', fontWeight: 600, mb: '15px'}}
            >
               Quizzes
            </Button>
         </Link>
            {details.length > 0 ? (
               details.map((detail, index) => <Box key={index} 
               component='div'
               sx={{
                  width: '950px',
                  backgroundColor: '#FFF',
                  boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
                  borderRadius: '15px',
                  p: '30px'
               }}>
                  <Avatar
                     alt={detail.title}
                     src={detail.bache}
                     sx={{ width: 56, height: 56, borderRadius: 0, }}
                  />
                  <Typography variant='h6' sx={{p: '8px 0px'}}>{detail.title}</Typography>
                  <Typography variant='body2'>Topics: {detail.topics.map((topic: string) => topic+', ')} etc.</Typography>
                  <Typography variant='body2' sx={{p: '13px 0px 5px'}}>{detail.user_attend.length} people took this</Typography>
                  <List sx={{ height: 'auto' }}>
                     <ListItem sx={{p: '5px 0px 0px'}}>
                        <FormatListBulletedOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                        <ListItemText primary="10 multiple choice questions" sx={{fontSize: '12px'}} />
                     </ListItem>
                     <ListItem sx={{p: '5px 0px 0px'}}>
                        <AccessTimeOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                        <ListItemText primary="Total 10 minutes, Per question you will get 1 minute." sx={{fontSize: '12px'}} />
                     </ListItem>
                     <ListItem sx={{p: '5px 0px 5px'}}>
                        <BeenhereOutlinedIcon sx={{color: '#00000099', pr: '5px'}} />
                        <ListItemText primary="Score in the top 30% to earn a badge" sx={{fontSize: '12px'}} />
                     </ListItem>
                  </List>
                  <Divider light />
                  <Typography variant='h6' sx={{p: '8px 0px 0px'}}>Before you start</Typography>
                  <List sx={{ height: 'auto' }}>
                     <ListItem sx={{p: '0px'}}>
                        <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                        <ListItemText primary="You must complete this assessment in one session — make sure your internet is reliable." sx={{fontSize: '12px'}} />
                     </ListItem>
                     <ListItem sx={{p: '5px 0px 0px'}}>
                        <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                        <ListItemText primary="You can retake this assessment once if you don’t earn a badge." sx={{fontSize: '12px'}} />
                     </ListItem>
                     <ListItem sx={{p: '5px 0px 5px'}}>
                        <FiberManualRecordIcon sx={{color: '#333', pr: '10px'}} />
                        <ListItemText primary="We won’t show your results to anyone without your permission." sx={{fontSize: '12px'}} />
                     </ListItem>
                  </List>
                  <Box 
                     component='div' 
                     sx={{
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        mt: '5px',
                        pt: '15px',
                        borderTop: '1px solid #ddd',
                     }}
                  >
                     <Typography variant='body2'>Language: <b>English</b></Typography>
                     <Box component='div'>
                        <Link to={'/html/practice'}>
                        <Button 
                           size="small" 
                           sx={{
                              border: '1px solid rgba(55, 81, 255, 0.5)', 
                              borderRadius: '25px', 
                              textTransform: 'capitalize',
                              paddingLeft: '12px',
                              paddingRight: '12px',
                              mr: '10px'
                           }}
                        >Practice</Button>
                        </Link>
                        {/* <Link to={'/quiz/html/start'}> */}
                        <Button
                           onClick={examStartHandler}
                           variant="contained"
                           size="small" 
                           sx={{
                              border: '1px solid rgba(55, 81, 255, 0.5)', 
                              borderRadius: '25px', 
                              textTransform: 'capitalize',
                           }}
                        >{loading ? 'Starting...' : 'Start'}</Button>
                     </Box>
                  </Box>
               </Box>)
            ):(
               <Stack spacing={1} sx={{
                  width: '950px',
                  height: '565px',
                  boxShadow: '0px 5px 6px 0px rgb(137 137 137 / 24%)',
                  borderRadius: '15px',
                  p: '30px'
               }}>
                  <Skeleton variant="circular" sx={{ width: 56, height: 56, borderRadius: 0, }} />
                  <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} width='200px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='600px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', mb: '5px' }} width='200px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='350px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='550px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem', mb: '65px' }} width='250px' />
                  <Divider light />
                  <Skeleton variant="text" sx={{ fontSize: '2rem' }} width='250px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='550px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='750px' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='450px' />
                  <Box component='div' sx={{
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'space-between',
                     mt: '5px',
                     pt: '15px',
                     borderTop: '1px solid #ddd',
                  }}>
                     <Skeleton variant="text" sx={{ fontSize: '1rem' }} width='200px' />
                     <Skeleton variant="rounded" width={180} height={40} />
                  </Box>
               </Stack>
            )}
      </Box>
   </Box>
  )
}

export default ExamDetails