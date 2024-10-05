// MiddlewareAuth.tsx
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'

interface Props {
  children: React.ReactNode
  allowedRoles: string // Daftar peran yang diperbolehkan
}

const MiddlewareAuth: React.FC<Props> = ({ children, allowedRoles }) => {
  const navigate = useNavigate()

  // api check validation token
  const token = authService.getAccessToken() // ganti user pakai jwt-docoe dari token
  const role = authService.getRole()

  useEffect(() => {
    // Jika tidak ada token dan role tidak sesuai (misal bukan client) atau role arahkan ke halaman login
    if (!token || !allowedRoles.includes(role || '')) {
      navigate('/login')
    }
  }, [token, role, navigate, allowedRoles])

  // Jika role valid, render children
  return <>{token && allowedRoles.includes(role || '') ? children : null}</>
}

export default MiddlewareAuth
