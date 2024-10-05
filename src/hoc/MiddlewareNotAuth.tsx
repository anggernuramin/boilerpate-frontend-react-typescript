import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../services/authService'

interface Props {
  children?: React.ReactNode
}

/* eslint-disable react-hooks/rules-of-hooks */
const MiddlewareNotAuth = (WrappedComponent: React.ComponentType<Props>) => {
  return (props: Props) => {
    const token = authService.getAccessToken()
    const navigate = useNavigate()
    const role = authService.getRole()

    useEffect(() => {
      if (token) {
        if (role === 'admin') {
          return navigate('/dashboard', { replace: true })
        } else {
          return navigate('/', { replace: true })
        }
      }
    }, [token, navigate])

    return token ? null : <WrappedComponent {...props} />
  }
}

export default MiddlewareNotAuth
