import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Faq from "./Pages/Faq";
import Profile from "./Pages/Profile";
import Quizzes from "./Pages/Quizzes";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import LeaderBoard from "./Pages/LeaderBoard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const routes = createBrowserRouter([
   {
      path: '/',
      element:  <App/>,
      children: [
         { index: true, element: <Quizzes/> },
         { path: 'faq', element: <Faq/> },
         { path: 'profile', element: <Profile/> },
         { path: 'about-us', element: <AboutUs/> },
         { path: 'contact-us', element: <ContactUs/> },
         { path: 'leader-board', element: <LeaderBoard/> },
         { path: 'sign-in', element: <SignIn/> },
         { path: 'sign-up', element: <SignUp/> }
      ],
   },
]);

export { routes }