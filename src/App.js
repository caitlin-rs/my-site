import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContactPage } from "./pages/ContactPage";
import { EduPage } from "./pages/EduPage";
import { HomePage } from './pages/HomePage';
import { ProjPage } from "./pages/ProjPage";
import { WorkPage } from "./pages/WorkPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <HomePage />
    },    
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/experience',
      element: <WorkPage />
    },
    {
      path: '/education',
      element: <EduPage />
    },
    {
      path: '/projects',
      element: <ProjPage />
    },
    {
      path: '/contact',
      element: <ContactPage />
    },
  ]);

  return (
    <RouterProvider router={router}>
      <HomePage />
    </RouterProvider>
  );
}

export default App;
