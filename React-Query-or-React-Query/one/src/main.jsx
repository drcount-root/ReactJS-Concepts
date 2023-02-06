import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)

// step1: 
// install react-router-dom, @tanstack/react-query & @tanstack/react-query-devtools

// step2: 
// in index/main.jsx wrap the <App /> with <QueryClientProvider client={queryClient}></QueryClientProvider>

// step3: 
// in index/main.jsx const queryClient = new QueryClient();

