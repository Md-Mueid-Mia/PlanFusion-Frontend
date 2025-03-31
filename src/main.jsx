import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './Router/router';
import { ThemeProvider } from './Providers/ThemeProvider';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TaskContext, TaskProvider } from './Providers/TaskContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      retry: 1,
    },
  },
});



  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
       <AuthProvider>
       <TaskProvider>
          <ThemeProvider>
            <RouterProvider router={router}/>
          </ThemeProvider>
       </TaskProvider>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  )
  

