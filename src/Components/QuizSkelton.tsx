import React from 'react';
import { Box, Grid, Skeleton, Stack } from '@mui/material';

const QuizSkelton: React.FC = () => {
  return (
   <>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Stack spacing={1}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            alignItems: 'center',
            gap: 2,
            borderRadius: '15px', 
            boxShadow: '0px 2px 6px 0px rgb(137 137 137 / 24%)' ,
            p: '15px',
            maxWidth: {xs: '260px', sm: '205px', md: '100%', lg: '100%'},
            width: {xs: '245px', sm: '205px', md: '100%', lg: '100%'},
            margin: {xs: '0 auto', sm: '0 auto', md: '0', lg: '0'}
          }}>
            <Skeleton variant="circular" width={60} height={60} sx={{borderRadius: '0px'}} />
            <Box component='div' width='165px'>
              <Skeleton variant="rectangular" width='125px' sx={{mb: 1}} />
              <Skeleton variant="rectangular" width='105px' />
            </Box>
            <Box component='div' sx={{display: 'flex', gap: '10px'}}>
              <Skeleton variant="rectangular" width='35px' sx={{mr: 1}} />
              <Skeleton variant="rectangular" width='35px' />
            </Box>
          </Box>
        </Stack>
      </Grid>
   </>
  )
}

export default QuizSkelton