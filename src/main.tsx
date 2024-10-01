/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Suspense, lazy } from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './container/MainLayout'
import Skeleton from './components/atoms/Skeleton'
import './index.css'

// Import HOC
import MiddlewareAuth from '../src/hoc/MiddlewareAuth'

// Import halaman dengan lazy loading
const ClientDashboard = lazy(() => import('../src/pages/client/home'))
const AdminDashboard = lazy(() => import('../src/pages/admin/dashboard'))
const LoginPage = lazy(() => import('./pages/auth/Login'))

// Konfigurasi routing dengan role-based access
const app = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <MiddlewareAuth allowedRoles={'client'}>
          <ClientDashboard />
        </MiddlewareAuth>
      </MainLayout>
    )
  },
  {
    path: '/admin',
    element: (
      <MainLayout>
        <MiddlewareAuth allowedRoles={'admin'}>
          <AdminDashboard />
        </MiddlewareAuth>
      </MainLayout>
    )
    // children: [
    //   {
    //     path: 'keahlian', // Sub-route untuk AdminKeahlian
    //     element: (
    //       <MiddlewareAuth allowedRoles={['admin']}>
    //         <AdminKeahlian />
    //       </MiddlewareAuth>
    //     )
    //   },
    // ],
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Skeleton />}>
      <RouterProvider router={app} />
    </Suspense>
  </React.StrictMode>
)
