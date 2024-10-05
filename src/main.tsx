/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'
import { Suspense, lazy } from 'react'
import * as ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Skeleton from './components/Skeleton'
import './index.css'

// Import HOC
import MiddlewareAuth from '../src/hoc/MiddlewareAuth'
import AdminLayout from './container/AdminLayout'
import ClientLayout from './container/ClientLayout'

const LoginPage = lazy(() => import('./pages/auth/Login'))

// Import halaman admin dengan lazy loading
const AdminDashboard = lazy(() => import('../src/pages/admin/dashboard'))
const AdminCategories = lazy(() => import('../src/pages/admin/categories'))

// Import halaman client dengan lazy loading
const ClientDashboard = lazy(() => import('../src/pages/client/home'))

// Konfigurasi routing dengan role-based access
const app = createBrowserRouter([
  {
    path: '/',
    element: (
      <ClientLayout>
        <MiddlewareAuth allowedRoles={'client'}>
          <ClientDashboard />
        </MiddlewareAuth>
      </ClientLayout>
    )
  },
  {
    path: '/dashboard',
    element: (
      <AdminLayout>
        <MiddlewareAuth allowedRoles={'admin'}>
          <AdminDashboard />
        </MiddlewareAuth>
      </AdminLayout>
    )
    // children: [
    //   {
    //     path: 'categories', // Sub-route untuk AdminKeahlian yan tetap ditampilkan di page yang sama seperti modal
    //     element: (
    //       <MiddlewareAuth allowedRoles={'admin'}>
    //         <AdminCategories />
    //       </MiddlewareAuth>
    //     )
    //   }
    // ]
  },
  {
    path: '/dashboard/categories',
    element: (
      <AdminLayout>
        <MiddlewareAuth allowedRoles={'admin'}>
          <AdminCategories />
        </MiddlewareAuth>
      </AdminLayout>
    )
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
