import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Project.jsx'; // Renamed import for clarity
import User from './components/User/User.jsx';
import Contact from './components/Contact/Contact.jsx'; // This was mistakenly named as "Linkedin"

// Make sure this is the correct component you want for 'linkedin' route
// If 'Linkedin' is a different component, keep both and import correctly.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route */}
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='contact' element={<Contact />} /> {/* Added this */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);