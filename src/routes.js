import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";

const routes = createBrowserRouter([
   {
      path: '/',
      element:  <App/>,
      children: [
         { index: true, element: <Home/> },
      ],
   },
]);

export { routes }