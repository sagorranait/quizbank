import React, {useState} from 'react';
import {
   AppBar, 
   Toolbar, 
   IconButton, 
   Typography,
   Button,
 } from '@mui/material';
 import MenuIcon from '@mui/icons-material/Menu';
 import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-hot-toast';
import { storeUser } from '../features/user/user';

 const windowRef = () => window;

 interface Props {
   dwidth: number;
 }

const Header: React.FC<Props> = (props) => {
  const { dwidth } = props;
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useAppSelector(state => state?.userData.user);

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };

   const signOutHandle = () => {
    setLoading(true);
    signOut(auth)
    .then(() => {
      setLoading(false);
      dispatch(
        storeUser({
          id: '', 
          name: '', 
          email: '',
          phone: '', 
          address: '', 
          city: '', 
          zip_code: '', 
          photo_url: '',
          quiz_took: [],
        }));
      toast.success('Successfully Sign-Out!');
      navigate('/');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      toast.error(`${errorCode} : ${errorMessage}`);
   });
   }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${dwidth}px)` },
          ml: { sm: `${dwidth}px` },
          backgroundColor: '#F7F8FC',
          color: '#C9CBD7',
          boxShadow: 'none',
          pr: '0px !important'
        }}
      >
        <Toolbar sx={{justifyContent: 'space-between',}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            sx={{
              color: '#3751FF', 
              fontWeight: 700, 
              paddingRight: '15px', 
              display: {xs: 'block', sm: 'none', md: 'none', lg: 'none'}
            }} 
            variant="h6" 
            noWrap 
            component="p"
          >
            QuizBank
          </Typography>
          <Typography 
            variant="caption" 
            noWrap 
            component="p" 
            sx={{
              fontWeight: 600, 
              display: {xs: 'none', sm: 'flex', lg: 'flex'}
            }}
          >
            You are building : 
            <Typography 
              variant='caption' 
              noWrap 
              component="span" 
              sx={{
                color: '#3751FF', 
                paddingLeft: '3px', 
                fontWeight: 600, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '5px'
              }}
            >
              Programming Knowledge <HelpOutlineOutlinedIcon sx={{fontSize: '13px', cursor: 'pointer'}}/>
            </Typography>
          </Typography>
            { user.id ? 
              <Button variant="contained" color='primary' onClick={signOutHandle}>{loading ? 'Outting...' : 'SIGN Out'}</Button> : 
              <Link to='/sign-in'><Button variant="contained" color='primary'>SIGN IN</Button></Link>
            }
        </Toolbar>
      </AppBar>
      {/* Sidebar Start */}
            <Sidebar 
              dwidth={dwidth} 
              window={windowRef} 
              drawerOpen={mobileOpen} 
              drawerFunction={handleDrawerToggle}
            />
      {/* Sideber End */}
    </>
  )
}

export default Header