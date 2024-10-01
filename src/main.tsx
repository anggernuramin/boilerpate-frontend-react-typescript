/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Suspense } from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import './index.css'
import MainLayout from './container/MainLayout'

// Import komponen-komponen yang akan digunakan
const Home = lazy(() => import('./pages/home'))

// Definisikan konfigurasi route menggunakan createBrowserRouter
const app = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  }
])

// Buat komponen Layout sederhana

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={app} />
    </Suspense>
  </React.StrictMode>
)
