import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import QuizSlider from '../Components/QuizSlider';
import QuizItem from '../Components/QuizItem';
import { collection, DocumentData, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase.config';
import QuizSkelton from '../Components/QuizSkelton';

const Quizzes: React.FC = () => {
  const [quizItem, setQuizItem] = useState<DocumentData[]>([]);

  useEffect(() => {
    const getQuiz = async () => {
      const q = query(collection(db, "quiz"));
      const querySnapshot = await getDocs(q);

      const data: React.SetStateAction<DocumentData[]> = [];
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        docData.id = doc.id;
        data.push(docData);
      });
      setQuizItem(data);
    }
    getQuiz();
  }, []);  

  return (
    <>
      <Box component='div'>
          <QuizSlider/>
      </Box>
      <Box component='div' sx={{p: '40px 20px 20px'}}>
          <Box component='div' sx={{pb: '20px'}}>
            <Typography variant='h6' sx={{textAlign: {xs: 'center', sm: 'center', md: 'left', lg: 'left'}}}>All Quizzes</Typography>
          </Box>
          <Box component='div'>
            <Grid container spacing={3} sx={{flexDirection: {xs: 'column', sm:'row', md: 'row', lg:'row'}}}>
              {quizItem.length > 0 ? (
                quizItem.map((item, index)=> <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                <QuizItem id={item.id} bache={item.bache} title={item.title} type={item.type} />
              </Grid>)
              ) : (
                <>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                  <QuizSkelton/>
                </>
              ) }
            </Grid>
          </Box>
      </Box>
    </>
  )
}

export default Quizzes