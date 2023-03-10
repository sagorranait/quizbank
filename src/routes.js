import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Faq from "./Pages/Faq";
import Profile from "./Pages/Profile";
import Quizzes from "./Pages/Quizzes";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ExamDetails from "./Pages/ExamDetails";
import Exam from "./Pages/Exam";
import ExamCompleted from "./Pages/ExamCompleted";
import ExamPractice from "./Pages/ExamPractice";
import ExamPracticed from "./Pages/ExamPracticed";
import RequireAuth from "./RequireAuth";

const routes = createBrowserRouter([
   {
      path: '/',
      element:  <App/>,
      children: [
         { index: true, element: <Quizzes/>},
         { path: 'faq', element: <Faq/> },
         { path: 'sign-in', element: <SignIn/> },
         { path: 'sign-up', element: <SignUp/> },
         { path: 'about-us', element: <AboutUs/> },
         { path: '/quiz/:eid/start', element: <RequireAuth><Exam/></RequireAuth>},
         { path: 'contact-us', element: <ContactUs/> },
         { path: '/quiz/:quizid', element: <RequireAuth><ExamDetails/></RequireAuth>},
         { path: '/quiz/:eid/practice', element: <RequireAuth><ExamPractice/></RequireAuth>},
         { path: '/quiz/practice/:quizid', element: <RequireAuth><ExamDetails/></RequireAuth>},
         { path: '/quiz/:quiz/practiced', element: <RequireAuth><ExamPracticed/></RequireAuth>},
         { path: '/quiz/:quiz/completed', element: <RequireAuth><ExamCompleted/></RequireAuth>},
         { path: 'profile', element: <RequireAuth><Profile/></RequireAuth> },
      ],
   },
]);

export { routes }