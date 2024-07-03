import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import Media from './pages/Media.jsx';
import About from './pages/About.jsx';
import About_nya_wc from './pages/About_nya_wc.jsx';
import Contact from './pages/Contact.jsx';
import Resources from './pages/Resources.jsx';
import Contentions from './pages/Contentions.jsx';
import More from './pages/More.jsx';
import Donate from './pages/Donate.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/media",
        element: <Media />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/working-committee",
        element: <About_nya_wc />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resources",
        element: <Resources />
      },
      {
        path: "/contentions",
        element: <Contentions />
      },
      {
        path: "/more",
        element: <More />
      },
      {
        path: "/donate",
        element: <Donate />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
