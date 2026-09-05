import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { axiosInstance } from './lib/axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        if (queryKey[0] === "authUser") {
          try {
            const res = await axiosInstance.get("/auth/me");
            return res.data;
          } catch {
            return null;
          }
        }
        return null;
      },
      refetchOnWindowFocus: false,
    },
  },
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
