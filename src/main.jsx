import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
import Gallery from './pages/Gallery.jsx';
import Videopage from './pages/Videopage.jsx';
import What_we_do from './pages/What_we_do.jsx';
import Who_we_serve from './pages/Who_we_serve.jsx';
import History from './pages/History.jsx';
import Leadership from './pages/Leadership.jsx';


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
        path: "/news",
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
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/videos",
        element: <Videopage />
      },
      {
        path: "/what-we-do",
        element: <What_we_do />
      },
      {
        path: "/who-we-serve",
        element: <Who_we_serve />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/leadership",
        element: <Leadership />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
